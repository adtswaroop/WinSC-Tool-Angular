import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup,Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { WinCondition } from 'src/app/classes/win-condition';
import { categories } from '../category-holder/dummyCategories';
import { Category } from 'src/app/classes/category';
// import { WinCondition } from 'src/app/classes/win-condition';

@Component({
  selector: 'app-win-input',
  templateUrl: './win-input.component.html',
  styleUrls: ['./win-input.component.css']
})
export class WinInputComponent implements OnInit {

  addWinForm : FormGroup
  @Input() categories: Array<Category>;
  @Input() currentCategory: string;
  @Output() currentCategoryChange = new EventEmitter<string>();
  @Output() addWinCondition = new EventEmitter<WinCondition>();

  constructor(private fb: FormBuilder) {
    this.addWinForm = this.fb.group({
      winpost: ['',[Validators.required,Validators.minLength(4)]]
    })
   }

   changeCategory(pCategory) {
     this.currentCategory = pCategory;
     this.currentCategoryChange.emit(pCategory);
   }

  ngOnInit() {
  }

  addWin = () => {
    console.log(this.addWinForm.controls['winpost'].value);
    this.addWinCondition.emit({
      upVoters: [],
      downVoters: [],
      likeType: 0,
      userName: 'Romi',
      userId: 1,
      text:this.addWinForm.controls['winpost'].value,
      winConditionId: 0,
      categories: categories,
      comments: [], 
      businessValue: 3,
      relativePenalty: 2,
      easeRealization: 5
    })
    this.addWinForm.setValue({
      winpost:''
    })
  }

}
