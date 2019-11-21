import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/classes/category';
import { WinCondition } from 'src/app/classes/win-condition';
import { IDropdownSettings, MultiSelectComponent } from 'ng-multiselect-dropdown';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-win-input',
  templateUrl: './win-input.component.html',
  styleUrls: ['./win-input.component.css']
})

export class WinInputComponent implements OnInit {

  addWinForm : FormGroup
  private categories: Array<Category>;
  @Input() currentCategory: string;
  @ViewChild('multiSelectx', {static:false}) multiSelect;

  @Output() currentCategoryChange = new EventEmitter<string>();
  @Output() addWinCondition = new EventEmitter<WinCondition>();

  dropdownList = [];
  selectedItems = [];
  selectedCategories = [];
  dropdownSettings = {};

  constructor(private fb: FormBuilder, private categoryService: CategoryService, private router: Router) {

    this.addWinForm = this.fb.group({
      winpost: ['',[Validators.required,Validators.minLength(4)]]
    })
   }

   changeCategory(pCategory) {
     this.currentCategory = pCategory;
     this.currentCategoryChange.emit(pCategory);
     this.dropdownList = this.categories;
   }

  ngOnInit() {
    this.categoryService.getCategories.subscribe((data) => {
      this.categories = data;
      this.dropdownList = data;
      if (this.multiSelect) {
        this.multiSelect.data = data;
        console.log(this.multiSelect);
      }
  });
    this.dropdownList = this.categories;
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false,
      enableCheckAll: false
    };
  }

  onItemSelect(item: any) {
    this.selectedCategories.push(this.categories.find(category => category.id == item.id));
  }

  addWin = () => {
    this.addWinCondition.emit({
      upVoters: [],
      downVoters: [],
      likeType: 0,
      userName: 'Romi',
      userId: 1,
      text:this.addWinForm.controls['winpost'].value,
      winConditionId: 0,
      categories: this.selectedCategories,
      comments: [],
      businessValue: 3,
      relativePenalty: 2,
      easeRealization: 5,
      priorityValue: 5
    })
    this.addWinForm.setValue({
      winpost:''
    })
    this.selectedItems = [];
    this.selectedCategories = [];
  }
}
