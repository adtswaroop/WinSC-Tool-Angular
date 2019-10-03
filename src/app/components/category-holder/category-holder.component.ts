import { Component, OnInit } from '@angular/core';

import { categories } from './dummyCategories';

@Component({
  selector: 'app-category-holder',
  templateUrl: './category-holder.component.html',
  styleUrls: ['./category-holder.component.css']
})
export class CategoryHolderComponent implements OnInit {
  categories = categories;

  constructor() {}

  ngOnInit() {
  }

  handleKey(event,box) {
      if (event.key === 'Enter'){
        this.categories.push({name:box.value});
        box.value = "";
      }
  }

}
