import { Component, OnInit, Input } from '@angular/core';
import { Benefit } from '../../classes/benefit';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { categories } from '../category-holder/dummyCategories';
import { DummyData } from './../../classes/dummy-data';


@Component({
  selector: 'app-project-benefits',
  templateUrl: './project-benefits.component.html',
  styleUrls: ['./project-benefits.component.css']
})
export class ProjectBenefitsComponent implements OnInit {
  @Input() Benefit = Benefit;
  // sortStates;
  // currentSortState;

  dropdownList = [];
  selectedItems = [];
  selectedCategories = [];
  dropdownSettings = {};

  constructor() { }

  ngOnInit() {
    // this.sortStates = ["Sort By", "Most Likes", "Least Likes"];
    // this.currentSortState = "Sort By";
    this.dropdownList = categories;
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
    this.selectedCategories.push(categories.find(category => category.id == item.id));
  }

  onCategoryChange(event) {
    const res =  new Array<string>();
    event.forEach(element => {
      res.push(element.name);
    });
  }

}
