import { Component, OnInit } from '@angular/core';
import { members } from './dummyMembers';
import { Project } from 'src/app/classes/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-project-settings',
  templateUrl: './project-settings.component.html',
  styleUrls: ['./project-settings.component.css']
})
export class ProjectSettingsComponent implements OnInit {

  PUBLIC_PROJECT = "public";
  PRIVATE_PROJECT = "private";
  members = members;
  activeProject: Project;
  tempName: string;
  tempVision: string;
  addMemberInput: string;

  constructor(private projectService: ProjectService) {
    this.projectService.getActiveProjectObject.subscribe((data) => {
      this.activeProject = data;
      this.activeProject.accessLevel = data.access;
      this.tempName = this.activeProject.name;
      this.tempVision = this.activeProject.vision;
      this.addMemberInput = "";
      console.log(this.activeProject);
    });
  }

  ngOnInit() {
  }

  deleteProject(projectId) {
     if (confirm("Are you SURE you want to DELETE this project?")) {
       console.log("Deleting project...");
       console.log(this.activeProject.id);
       this.projectService.deleteProject(this.activeProject.id);
     } else {
       console.log("Abort delete project.");
     }
  }

  updateProject() {
     this.activeProject.name = this.tempName;
     this.activeProject.vision = this.tempVision;
     this.projectService.updateProject(this.activeProject);
  }

  cancelUpdateProject() {
    this.tempName = this.activeProject.name;
    this.tempVision = this.activeProject.vision;
  }

  updateProjectAccessLevel(paccessLevel) {
     this.activeProject.accessLevel = paccessLevel;
     this.activeProject.access = paccessLevel;
     this.projectService.updateProject(this.activeProject);
  }


  addProjectMember(event) {
    if (event.key === "Enter") {
      console.log(event.target.value);
      this.projectService.addProjectMember(event.target.value, this.activeProject.id);
      this.addMemberInput = "";
    }
  }

  removeProjectMember(puser) {
    this.projectService.removeProjectMember(puser.user.email, puser.projectId);
  }

  updateProjectMember(puser, prole) {
    
    this.projectService.updateProjectMember(puser.user.email, prole, puser.projectId);
  }



}
