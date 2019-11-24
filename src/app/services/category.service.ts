import { Injectable } from '@angular/core';
import { categories } from '../components/category-holder/dummyCategories';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../classes/category';

const cat: Category[] = categories;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryData = new BehaviorSubject<Category[]>(cat);
  getCategories = this.categoryData.asObservable();
  constructor() {
  }

  addCategory(category: Category) {
    const arr = this.categoryData.value;
    arr.push(category);
    this.categoryData.next(arr);
  }

  generateNewId (){
    let maxId = 1;
    this.categoryData.value.forEach((element) => {
      if (element.id > maxId) {
        maxId = element.id;
      }
    });
    return maxId + 1;
  }
}
