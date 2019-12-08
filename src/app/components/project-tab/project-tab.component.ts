import { Component, OnInit } from '@angular/core';
import { User } from './../../classes/user';
import { AuthenticationService } from './../../services/authentication.service'
import { ProjectService } from 'src/app/services/project/project.service';


@Component({
  selector: 'app-project-tab',
  templateUrl: './project-tab.component.html',
  styleUrls: ['./project-tab.component.css']
})
export class ProjectTabComponent implements OnInit {

  currUser: User;
  userInfo;
  showSetting = true;
  activeProject;

  constructor(private authService: AuthenticationService, private projectService: ProjectService) { }

  ngOnInit() {
    this.currUser = this.authService.currentUserValue;
    this.userInfo = {}
    console.log("this.currUser");
    console.log(this.currUser);
    // if (this.currUser.type == 'regular') {
    //   this.showSetting = false;
    // }
    this.projectService.getActiveProjectObject.subscribe((data) => {
      this.activeProject = data;
      this.activeProject.accessLevel = data.access;
      if(this.activeProject.description != "Waiting..") {
        for (let i = 0; i < this.activeProject.users.length; i++) {
        if(this.activeProject.users[i].id == this.currUser.id ){
          this.userInfo = this.activeProject.users[i];
          break;
        }
      }
      }
    });
  }
}
