import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup,Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Project } from 'src/app/classes/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-project-vision',
  templateUrl: './project-vision.component.html',
  styleUrls: ['./project-vision.component.css']
})
export class ProjectVisionComponent implements OnInit {

  addVisionForm : FormGroup
  vision : FormControl
  activeProject: Project;
  @Output() addArticle = new EventEmitter<any>()

  constructor(private fb: FormBuilder, private projectService: ProjectService) {
    this.addVisionForm = this.fb.group({
      vision: ['',[Validators.required,Validators.minLength(4)]]
    })

    this.projectService.getActiveProjectObject.subscribe((data) => {
      this.activeProject = data;
    });
   }

  ngOnInit() {
  }

  addVision = () => {
    document.getElementById("save-button").style.display = 'none';
    this.addVisionForm.setValue({
      vision:this.addVisionForm.controls['vision'].value
    })
  }

  onInputClick = () => {
    document.getElementById("save-button").style.display = 'inline';
  }

  getTotalUsers() {
    if (this.activeProject.users) {
      return this.activeProject.users.length;
    } else {
      return 0;
    }
  }

}
