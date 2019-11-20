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

  private joinedProjectSub: Subscription;
  private otherProjectSub: Subscription;

  otherProjectList: Project[];
  joinedProjectList: Project[];
  // proj1 = '';
  // proj2 = '';

  constructor(private projectService: ProjectService) {
    // initialize service to retrieve project data

    // initialize project name and project description
    this.joinedProjectSub = this.projectService.joinedProjectList.subscribe(data => {
      this.joinedProjectList = data;
    });
    this.otherProjectSub = this.projectService.otherProjectList.subscribe((data => {
      this.otherProjectList = data;
    }));
    // dynamically added div based on projects retrieved.

    // this.proj1 = 'ProjectX';
    // this.proj2 = 'ProjectY';
   }

  ngOnInit() {

  }

  joinProject(projectId) {
    const joinobs = this.projectService.joinProject(projectId);
    joinobs.subscribe((data) => {
      console.log(data);
      this.projectService.getAllProjects();
    });
  }

  ngOnDestroy(): void {
    this.joinedProjectSub.unsubscribe();
    this.otherProjectSub.unsubscribe();
  }
}
