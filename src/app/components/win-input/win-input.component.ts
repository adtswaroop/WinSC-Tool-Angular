import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup,Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { WinCondition } from 'src/app/classes/win-condition';
// import { WinCondition } from 'src/app/classes/win-condition';

@Component({
  selector: 'app-win-input',
  templateUrl: './win-input.component.html',
  styleUrls: ['./win-input.component.css']
})
export class WinInputComponent implements OnInit {

  addLinkForm : FormGroup
  @Output() addWinCondition = new EventEmitter<WinCondition>()

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
    this.addWinCondition.emit({
      upVoters: null,
      downVoters: null,
      likeType: 1,
      userName: 'Romi',
      userId: 1,
      text:this.addLinkForm.controls['winpost'].value,
      winConditionId: 0,
      categories: null,
      comments: null
    })
    this.addLinkForm.setValue({
      winpost:''
    })
  }

}