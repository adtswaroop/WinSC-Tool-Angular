import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/project';
import { ProjectService } from 'src/app/services/project/project.service';
import { Router } from '@angular/router';

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
  projectBVW: number;
  projectRPW: number;
  projectERW: number;
  loading = false;
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
  }

  addProject() {
    let newProject = new Project(this.projectName,0,this.projectDesc,this.accessLevel,this.projectVision,false,false,
      this.projectBVW, this.projectRPW, this.projectERW, new Date(), new Date());
    this.projectService.createProject(newProject);
    this.router.navigate(['project-list']);
  }

}
