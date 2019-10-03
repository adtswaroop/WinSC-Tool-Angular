import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup,Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-win-condition',
  templateUrl: './win-condition.component.html',
  styleUrls: ['./win-condition.component.css']
})
export class WinConditionComponent implements OnInit {

  addLinkForm : FormGroup
  winpostpost : FormControl
  @Output() addArticle = new EventEmitter<any>()

  constructor(private fb: FormBuilder) {
    this.addLinkForm = this.fb.group({
      winpost: ['',[Validators.required,Validators.minLength(4)]]
    })
   }

  ngOnInit() {
  }

  addLink = () => {
    console.log(this.addLinkForm.controls['winpost'].value);
    document.getElementById('winpost-value').textContent = this.addLinkForm.controls['winpost'].value;
    this.addArticle.emit({
      winpost:this.addLinkForm.controls['winpost'].value
    })
    this.addLinkForm.setValue({
      winpost:''
    })
  }

}