import { Component, OnInit, OnDestroy } from '@angular/core';
import { DummyData } from './../../classes/dummy-data';
import { ProjectService } from './../../services/project/project.service';
import { Subscription } from 'rxjs';
import { Project } from './../../classes/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnDestroy {

  private projectServiceSub: Subscription;
  projectList: Project[];
  // proj1 = '';
  // proj2 = '';

  constructor(private projectService: ProjectService) {
    // initialize service to retrieve project data

    // initialize project name and project description
    this.projectServiceSub = this.projectService.getProjectList.subscribe(data => {
      this.projectList = data;
    });
    // dynamically added div based on projects retrieved.

    // this.proj1 = 'ProjectX';
    // this.proj2 = 'ProjectY';
   }

  ngOnInit() {
    // initialize project data listener
    this.projectService.getAllProjects();
  }

  ngOnDestroy(): void {
    this.projectServiceSub.unsubscribe();
  }
}
