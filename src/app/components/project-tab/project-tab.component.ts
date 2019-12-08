import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from './../../classes/user';
import { ProfileService } from 'src/app/services/profile.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from 'src/app/classes/project';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-tab',
  templateUrl: './project-tab.component.html',
  styleUrls: ['./project-tab.component.css']
})
export class ProjectTabComponent implements OnInit, OnDestroy {

  showSetting = false;
  activeProject: Project;
  activeUser: User;
  profSub: Subscription;
  projSub: Subscription;

  constructor(private profileService: ProfileService,
              private projectService: ProjectService,
              private router: Router) {
    this.projSub = this.projectService.getActiveProjectObject.subscribe((data) => {
        this.activeProject = data;
        this.setUserAccess();
    });
    this.profSub = this.profileService.userData.subscribe((data) => {
        this.activeUser = data;
        this.setUserAccess();
    });
  }

  ngOnInit() {

  }

  checkUser(): boolean {
    if (this.activeUser) {
      return true;
    } else {
      return false;
    }
  }

  checkProject(): boolean {
    if (this.activeProject && this.activeProject.id !== -1) {
      return true;
    } else {
      return false;
    }
  }

  setUserAccess() {

    if (this.checkProject() && this.checkUser()) {
      const foundRelation = this.activeProject.users.find ((projectUser) => {
          return projectUser.userId === this.activeUser.id;
      });
      if (foundRelation) {
        if (foundRelation.role === 'admin' || foundRelation.role === 'owner') {
          this.showSetting = true;
        } else {
          this.showSetting = false;
        }
      } else {
        console.log("User is not part of the project");
        console.log(this.activeProject);
        console.log(this.activeUser);
        this.router.navigate(['project-list']);
      }
    }


  }
  ngOnDestroy(): void {
    this.profSub.unsubscribe();
    this.projSub.unsubscribe();
  }
}
