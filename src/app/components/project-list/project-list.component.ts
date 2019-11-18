import { Component, OnInit, OnDestroy } from '@angular/core';
import { DummyData } from './../../classes/dummy-data';
import { ProjectListService } from '../../services/project-list/project-list.service';
import { Subscription } from 'rxjs';
import { Project } from './../../classes/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnDestroy {

  private projectListSub: Subscription;
  projectList: Project[];
  // proj1 = '';
  // proj2 = '';

  constructor(private projectListService: ProjectListService) {
    // initialize service to retrieve project data

    // initialize project name and project description
    this.projectListSub = this.projectListService.getProjectList.subscribe(data => {
      this.projectList = data;
    });
    // dynamically added div based on projects retrieved.

    // this.proj1 = 'ProjectX';
    // this.proj2 = 'ProjectY';
   }

  ngOnInit() {
    // initialize project data listener
    this.projectListService.getAllProjects();
  }

  ngOnDestroy(): void {
    this.projectListSub.unsubscribe();
  }
}
