import { Component, OnInit } from '@angular/core';
import { DummyData } from './../../classes/dummy-data';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  proj1 = '';
  proj2 = '';

  constructor() {
    // initialize service to retrieve project data

    // initialize project name and project description
    this.proj1 = 'ProjectX';
    this.proj2 = 'ProjectY';
   }

  ngOnInit() {
    // initialize project data listener
  }
}
