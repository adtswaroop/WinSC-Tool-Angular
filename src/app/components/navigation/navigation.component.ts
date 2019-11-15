import { Component, OnInit } from '@angular/core';

export const projects = ['Winbook 2.0', 'Project Swarm', 'Winbook Feedback'];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  projects = projects;

  constructor() { }

  ngOnInit() {
  }
}
