import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/project';
import { ProjectService } from 'src/app/services/project/project.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  projectName: string;
  projectDesc: string;
  projectVision: string;
  accessLevel: string;
  loading = false;
  loadingSub: Subscription;
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.loadingSub = this.projectService.projectCreated.subscribe(loading => this.loading = loading);
  }

  addProject() {
    // start progress bar upon clicking the button
    let newProject = new Project(this.projectName,0,this.projectDesc,this.accessLevel,this.projectVision,false,false,0,0,0,new Date(),new Date());
    this.projectService.createProject(newProject);
    this.router.navigate(['project-list']);
  }

}
