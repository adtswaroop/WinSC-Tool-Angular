import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  url = null;

  constructor() { }

  ngOnInit() { }

  onPhotoUpload(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event:any) => {
          this.url = event.target.result;
      }
    }
  }

  confirmPassword(event, box) {
    if((<HTMLInputElement> document.getElementById("passwordConfirm")).value !=  event.target.value) {
      document.getElementById("password-warning").innerHTML = "Password doesn't match";
      (<HTMLButtonElement> document.getElementById("update-password")).disabled = true;
    } else {
      document.getElementById("password-warning").innerHTML = "";
      (<HTMLButtonElement> document.getElementById("update-password")).disabled = false;
    }
  }

  reconfirmPassword(event, box) {
    if((<HTMLInputElement> document.getElementById("passwordInput")).value !=  event.target.value) {
      document.getElementById("password-warning").innerHTML = "Password doesn't match";
      (<HTMLButtonElement> document.getElementById("update-password")).disabled = true;
    } else {
      document.getElementById("password-warning").innerHTML = "";
      (<HTMLButtonElement> document.getElementById("update-password")).disabled = false;
    }
  }
}
