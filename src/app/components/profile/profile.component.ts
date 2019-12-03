import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../classes/user';
import { ProfileService } from '../../services/profile.service';
import { Subscription } from 'rxjs';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
// import { $ } from 'protractor';

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
      validate();
      $('#firstNameInput, #lastNameInput, #emailInput').keyup(validate);
      validatePW();
      $('#passwordInput, #passwordConfirm').keyup(validatePW);
      validateEmail();
      $('#emailInput').keyup(validateEmail);
    });
  
    function validate() {
      if ($('#firstNameInput').val().length > 0 || $('#lastNameInput').val().length > 0 || $('#emailInput').val().length > 0) {
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

  ngOnDestroy(): void {
    this.currUserSub.unsubscribe();
  }
}
