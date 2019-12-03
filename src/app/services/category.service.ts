import { Injectable } from '@angular/core';
import { categories } from '../components/category-holder/dummyCategories';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../classes/category';
import { BackendService } from './backend.service';
import { ProjectService } from './project/project.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private activeProjectId;
  private categoryData = new BehaviorSubject<Category[]>([]);
  getCategories = this.categoryData.asObservable();
  private selectedCategoriesData = new BehaviorSubject<Category[]>([]);
  getSelectedCategories = this.selectedCategoriesData.asObservable();
  constructor(private backendService: BackendService, private projectService: ProjectService) {
    this.projectService.getActiveProjectId.subscribe((projectId)=>{
        this.getAllCategories(projectId);
        this.activeProjectId = projectId;
    });
  }


  getAllCategories(projectId: number) {
    if (projectId < 0) {
      this.categoryData.next([]);
      return;
    }
    const obj = this.backendService.getAllCategories(projectId);
    obj.subscribe((data)=> {
        this.categoryData.next(data);
    });
  }

  createCategory(category: Category) {
    const obs = this.backendService.createCategory(this.activeProjectId, category);
    obs.subscribe((data) => {
      let categoryArr = this.categoryData.value;
      categoryArr.push(data);
      this.categoryData.next(categoryArr);
    });
  }

  setSelectedCategories(categories: Category[]) {
    this.selectedCategoriesData.next(categories);
  }
}
