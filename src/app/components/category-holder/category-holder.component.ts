import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-holder',
  templateUrl: './category-holder.component.html',
  styleUrls: ['./category-holder.component.css']
})
export class CategoryHolderComponent implements OnInit {

  categoryForm: FormGroup;
  categories: Category[];
  categoriesSelected = new Set<Category>();

  @Output() applyCategoryToWin = new EventEmitter<Array<Category>>();

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private router:Router) {
    this.categoryService.getCategories.subscribe((data) => {
        this.categories = data;
    });
  }

  private addCheckboxes() {
    this.categories.forEach((o, i) => {
      const control = new FormControl(false); // if first item set to true, else false
      (this.categoryForm.controls.categories as FormArray).push(control);
    });
  }

  applyCategory() {
    this.categoryService.setSelectedCategories(Array.from(this.categoriesSelected));
  }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      categories: new FormArray([])
    });
    this.addCheckboxes();
  }

  handleKey(event, box) {
      if (event.key === 'Enter') {
        var type = 'regular';
        if ((<HTMLInputElement> document.getElementById('mmf-input')).checked) {
          type = 'mmf';
        }
        const color = (<HTMLInputElement> document.getElementById('category-color')).value.substring(1);
        const cat = new Category(0,box.value,1,color,type);
        this.categoryService.createCategory(cat);
        box.value = '';

        this.categoryForm = this.formBuilder.group({
          categories: new FormArray([])
        });

        this.addCheckboxes();
      }
  }

  handleCheck(event, category) {
    const checked = event.target.checked;
    if (checked) {
      this.categoriesSelected.add(category);
    } else {
      this.categoriesSelected.delete(category);
    }
  }

  addHashToCategory(categoryStr: string) {
    return "#"+categoryStr;
  }

  deleteCategory() {
  }

}
