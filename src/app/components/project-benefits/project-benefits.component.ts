import { Component, OnInit, Input } from '@angular/core';
import { Benefit } from '../../classes/benefit';
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

  constructor() { }

  ngOnInit() {
    // this.sortStates = ["Sort By", "Most Likes", "Least Likes"];
    // this.currentSortState = "Sort By";

  }

  onCategoryChange(event) {
    console.log('I got it babe ');
    const res =  new Array<string>();
    event.forEach(element => {
      res.push(element.name);
    });
  }

}
