import { Component, OnInit } from '@angular/core';
import { User } from './../../classes/user';
import { AuthenticationService } from './../../services/authentication.service'

@Component({
  selector: 'app-project-tab',
  templateUrl: './project-tab.component.html',
  styleUrls: ['./project-tab.component.css']
})
export class ProjectTabComponent implements OnInit {

  currUser: User;
  showSetting = true;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.currUser = this.authService.currentUserValue;
    console.log(this.currUser);
    if (this.currUser.type == 'regular') {
      this.showSetting = false;
    }
  }
}
