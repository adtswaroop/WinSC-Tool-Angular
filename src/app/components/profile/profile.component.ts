import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../classes/user';
import { ProfileService } from '../../services/profile.service';
import { Subscription } from 'rxjs';

declare var $:any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  url = null;
  private currUserSub: Subscription;
  public currUser: User;

  constructor(private profileService: ProfileService) {
    this.currUserSub = this.profileService.userData.subscribe((data: User) => {
      this.currUser = data;
    });
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#saveChanges').prop("disabled", true);
      $('#cancelChanges').prop("disabled", true);
      $('#updatePassword').prop("disabled", true);
      $('#cancelPassword').prop("disabled", true);

      $('#firstNameInput, #lastNameInput, #emailInput').keyup(validate);
      $('#passwordInput, #passwordConfirm').keyup(validatePW);
      $('#emailInput').keyup(validateEmail);
    });

    function validate() {
      if ($('#firstNameInput').val().length > 0 || $('#lastNameInput').val().length > 0 || $('#emailInput').val().length > 0) {
        document.getElementById("info-confirmation").innerHTML = "";
        $('#saveChanges').prop("disabled", false);
        $('#cancelChanges').prop("disabled", false);
      } else {
        $('#saveChanges').prop("disabled", true);
        $('#cancelChanges').prop("disabled", true);
      }
    }

    function validateEmail() {
      var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,}$/i;
      if ($('#emailInput').val().length != 0 && !testEmail.test($('#emailInput').val())) {
        document.getElementById("email-warning").innerHTML = "Please enter a valid email address.";
        $('#saveChanges').prop("disabled", true);
      } else {
        document.getElementById("email-warning").innerHTML = "";
      }
    }

    function validatePW() {
      if ($('#passwordInput').val().length > 0 || $('#passwordConfirm').val().length > 0) {
        document.getElementById("pw-confirmation").innerHTML = "";

        if ($('#passwordInput').val() == $('#passwordConfirm').val()) {
          document.getElementById("password-warning").innerHTML = "";
          $('#updatePassword').prop("disabled", false);
          $('#cancelPassword').prop("disabled", false);
        } else {
          document.getElementById("password-warning").innerHTML = "Passwords do not match.";
          $('#updatePassword').prop("disabled", true);
          $('#cancelPassword').prop("disabled", false);
        }
      } else {
        document.getElementById("password-warning").innerHTML = "";
        $('#updatePassword').prop("disabled", true);
        $('#cancelPassword').prop("disabled", true);
      }
    }
  }

  onPhotoUpload(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
    }
  }

  cancelInfo() {
    $('#firstNameInput').val(null);
    $('#lastNameInput').val(null);
    $('#emailInput').val(null);
    $('#saveChanges').prop("disabled", true);
    $('#cancelChanges').prop("disabled", true);
    document.getElementById('info-confirmation').innerHTML = "";
  }

  saveInfo() {
    var userInfo = new User();

    if ($('#firstNameInput').val() != "") userInfo.firstName = $('#firstNameInput').val();
    if ($('#lastNameInput').val() != "") userInfo.lastName = $('#lastNameInput').val();
    if ($('#emailInput').val() != "") userInfo.email = $('#emailInput').val();

    const promise = this.profileService.putUserData(userInfo);
    promise.then(() => {
      document.getElementById('info-confirmation').innerHTML = "Profile update complete!";
      $('#firstNameInput').val(null);
      $('#lastNameInput').val(null);
      $('#emailInput').val(null);

      $('#saveChanges').prop("disabled", true);
      $('#cancelChanges').prop("disabled", true);

    }, () => {
      document.getElementById('info-confirmation').innerHTML = "Email address is already registered! Please try again.";
    });
  }

  cancelPW() {
    $('#passwordInput').val(null);
    $('#passwordConfirm').val(null);
    $('#updatePassword').prop("disabled", true);
    $('#cancelPassword').prop("disabled", true);
    document.getElementById('password-warning').innerHTML = "";
  }

  updatePW() {
    var userInfo = new User();
    userInfo.password = $('#passwordConfirm').val();

    this.profileService.putUserData(userInfo);
    document.getElementById('pw-confirmation').innerHTML = "Password update complete!";

    $('#passwordInput').val(null);
    $('#passwordConfirm').val(null);
    $('#updatePassword').prop("disabled", true);
    $('#cancelPassword').prop("disbaled", true);
  }

  ngOnDestroy(): void {
    this.currUserSub.unsubscribe();
  }
}
