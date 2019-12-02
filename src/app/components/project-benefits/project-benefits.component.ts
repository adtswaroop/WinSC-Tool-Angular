import { Component, OnInit, Input } from '@angular/core';
import { Benefit } from '../../classes/benefit';
import { BenefitBackend } from '../../services/benefitbackend.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { categories } from '../category-holder/dummyCategories';
import { DummyData } from './../../classes/dummy-data';
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-project-benefits',
  templateUrl: './project-benefits.component.html',
  styleUrls: ['./project-benefits.component.css']
})
export class ProjectBenefitsComponent implements OnInit {
  
  data:any = {};
  @Input() Benefit = Benefit;
  // sortStates;
  // currentSortState;

  dropdownList = [];
  selectedItems = [];
  selectedCategories = [];
  dropdownSettings = {};

  constructor( private serviceCall : BenefitBackend) { }

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

    this.serviceCall.getAllBenefits(10).subscribe(
      data=>{this.data = data},
      err=>{console.log(err)},
      ()=>console.log(this.data)
    );
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
