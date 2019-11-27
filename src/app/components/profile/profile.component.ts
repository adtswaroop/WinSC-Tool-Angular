import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../classes/user';
import { ProfileService } from '../../services/profile.service';
import { Subscription } from 'rxjs';

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
    if((<HTMLInputElement> document.getElementById("passwordInput")).value !=  event.target.value) {
      document.getElementById("password-warning").innerHTML = "Password doesn't match";
    } else {
      document.getElementById("password-warning").innerHTML = "";
    }
  }

  ngOnDestroy(): void {
    this.currUserSub.unsubscribe();
  }
}
