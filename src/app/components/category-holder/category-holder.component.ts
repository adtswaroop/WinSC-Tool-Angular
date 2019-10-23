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
    console.log(selectedOrderIds);
    this.applyCategoryToWin.emit(selectedOrderIds);
    // this.applyCategoryForm.setValue({
    //   categorycheck:''
    // })
  }


  ngOnInit() {
  }

  handleKey(event, box) {
      if (event.key === 'Enter') {
        this.categories.push({name: box.value, isMMF: false, color: ''});
        box.value = '';
      }
  }

  // applyCategory() {
  //   const selectedCategories = this.categoryForm.value.orders
  //     .map((v, i) => v ? this.categories[i].name : null)
  //     .filter(v => v !== null);
  //   console.log(selectedCategories);
  //   // console.log(this.applyCategoryForm.controls['categorycheck'].valueChanges);
  //   // this.applyCategoryToWin.emit({
  //   //   text: 'Category1',
  //   //   isMMF: false,
  //   //   color: '#ffff'
  //   // })
  //   // this.applyCategoryForm.setValue({
  //   //   categorycheck:''
  //   // })
  // }

}
