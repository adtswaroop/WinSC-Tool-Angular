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
  categoriesSelected = [];

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
    const selectedOrderIds = this.categoryForm.value.categories
      .map((v, i) => v ? this.categories[i] : null)
      .filter(v => v !== null);
    this.applyCategoryToWin.emit(selectedOrderIds);
    console.log(this.categoryForm.value.categories.map((v, i) => v ? this.categories[i] : null));
  }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      categories: new FormArray([])
    });
    this.addCheckboxes();
  }

  handleKey(event, box) {
      if (event.key === 'Enter') {
        var isMMF = false;
        if ((<HTMLInputElement> document.getElementById('mmf-input')).checked) {
          isMMF = true;
        }
        const color = (<HTMLInputElement> document.getElementById('category-color')).value;
        const id = this.categoryService.generateNewId();
        const cat = new Category(id,box.value,1,color,isMMF);
        //this.categories.push({id: box.id, name: box.value, isMMF: isMMF, color: (<HTMLInputElement> document.getElementById('category-color')).value});
        this.categoryService.addCategory(cat);
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
