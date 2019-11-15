import { Component, OnInit } from '@angular/core';
import { members } from './dummyMembers';

@Component({
  selector: 'app-project-settings',
  templateUrl: './project-settings.component.html',
  styleUrls: ['./project-settings.component.css']
})
export class ProjectSettingsComponent implements OnInit {

  members = members;

  constructor() { }

  ngOnInit() {
  }

}
