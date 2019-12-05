import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/classes/category';
import { WinCondition } from 'src/app/classes/win-condition';
import { User } from 'src/app/classes/user';
import { WinconditionService } from 'src/app/services/wincondition.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
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
  @ViewChild('multiSelectx', {static:false}) multiSelect;

  dropdownList = [];
  selectedItems = [];
  selectedCategories = [];
  dropdownSettings = {};
  constructor(private fb: FormBuilder,
              private winConditionService: WinconditionService,
              private authService: AuthenticationService,
              private categoryService: CategoryService,
              private router: Router) {
      this.addWinForm = this.fb.group({
      winpost: ['',[Validators.required,Validators.minLength(4)]]
    })
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

  addWin() {
    const wcText = this.addWinForm.controls['winpost'].value;
    const user = this.authService.currentUserValue;
    const wc = new WinCondition(0,0,user,wcText,0,0,0,0,[],[],[],[]);
    const categorIds = this.selectedCategories.map((element) => element.id);
    wc.categoryIds = categorIds;
    this.winConditionService.createWincondition(wc);
    this.addWinForm.controls['winpost'].setValue("");
  }
}
