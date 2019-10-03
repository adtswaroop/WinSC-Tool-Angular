import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup,Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-vision',
  templateUrl: './project-vision.component.html',
  styleUrls: ['./project-vision.component.css']
})
export class ProjectVisionComponent implements OnInit {

  addVisionForm : FormGroup
  vision : FormControl
  @Output() addArticle = new EventEmitter<any>()

  constructor(private fb: FormBuilder) {
    this.addVisionForm = this.fb.group({
      vision: ['',[Validators.required,Validators.minLength(4)]]
    })
   }

  ngOnInit() {
  }

  addVision = () => {
    console.log(this.addVisionForm.controls['vision'].value);
    document.getElementById("save-button").style.display = 'none';
    this.addVisionForm.setValue({
      vision:this.addVisionForm.controls['vision'].value
    })
  }

  onInputClick = () => {
    document.getElementById("save-button").style.display = 'inline';
  }

}