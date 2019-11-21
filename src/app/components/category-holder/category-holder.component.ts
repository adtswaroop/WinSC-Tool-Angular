import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/classes/category';
import { categories } from './dummyCategories';

@Component({
  selector: 'app-category-holder',
  templateUrl: './category-holder.component.html',
  styleUrls: ['./category-holder.component.css']
})
export class CategoryHolderComponent implements OnInit {

  categoryForm: FormGroup;
  categories = categories;
  categoriesSelected = [];

  @Output() applyCategoryToWin = new EventEmitter<Array<Category>>();

  constructor(private formBuilder: FormBuilder) {
    this.categoryForm = this.formBuilder.group({
      categories: new FormArray([])
    });

    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.categories.forEach((o, i) => {
      const control = new FormControl(false); // if first item set to true, else false
      (this.categoryForm.controls.categories as FormArray).push(control);
    });
  }

  applyCategory() {
    const selectedOrderIds = this.categoryForm.value.categories
      .map((v, i) => v ? this.categories[i] : null)
      .filter(v => v !== null);
    this.applyCategoryToWin.emit(selectedOrderIds);
    console.log(this.categoryForm.value.categories.map((v, i) => v ? this.categories[i] : null));
  }

  ngOnInit() {
  }

  handleKey(event, box) {
      if (event.key === 'Enter') {
        var isMMF = false;
        if ((<HTMLInputElement> document.getElementById('mmf-input')).checked) {
          isMMF = true;
        }
        this.categories.push({id: box.id, name: box.value, isMMF: isMMF, color: (<HTMLInputElement> document.getElementById('category-color')).value});
        box.value = '';

        this.categoryForm = this.formBuilder.group({
          categories: new FormArray([])
        });
    
        this.addCheckboxes();
      }
  }

  deleteCategory() {
  }

}
