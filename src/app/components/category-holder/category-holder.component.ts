import { Subscription } from 'rxjs';
import { ProjectService } from 'src/app/services/project/project.service';
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-category-holder',
  templateUrl: './category-holder.component.html',
  styleUrls: ['./category-holder.component.css']
})
export class CategoryHolderComponent implements OnInit, OnDestroy {

  categoryForm: FormGroup;
  categories: Category[];
  categoriesSelected = new Set<Category>();
  cSub: Subscription;
  pSub: Subscription;

  constructor(private formBuilder: FormBuilder,
              private categoryService: CategoryService,
              private projectService: ProjectService,
              private customModal: ModalService) {
    this.cSub = this.categoryService.getCategories.subscribe((data) => {
        this.categories = data;
    });

    this.pSub = this.projectService.getActiveProjectId.subscribe((data) => {
      this.categoriesSelected.clear();
      this.applyCategory();
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

  deleteCategory(category: Category) {
    console.log("DLT");
    const dialogText = 'Delete category ' + category.name + ' ?';
    this.customModal.openConfirmModal(dialogText, (answer: boolean) => {
      if (answer) {
        this.categoriesSelected.delete(category);
        this.categoryService.deleteCategory(category.id);
      }
    });
  }

  ngOnDestroy(): void {
    this.cSub.unsubscribe();
    this.pSub.unsubscribe();
  }

}
