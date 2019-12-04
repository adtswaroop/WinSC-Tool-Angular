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

  members = members;
  activeProject: Project;

  constructor(private projectService: ProjectService) {
    this.projectService.getActiveProjectObject.subscribe((data) => {
      this.activeProject = data;
    });
  }

  ngOnInit() {
  }

  deleteProject(projectId) {
     if (confirm("Confirm to delete the project")) {
       console.log("project deleted");
       this.projectService.deleteProject(this.activeProject.id);
     } else {
       console.log("we good");
     }
  }

  updateProject() {
     this.projectService.updateProject(this.activeProject);
  }

}
