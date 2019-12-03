import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment'
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { WinCondition } from '../classes/win-condition';
import { Comment } from '../classes/comment';
import { Project } from '../classes/project';
import { Category } from '../classes/category';
import { Benefit } from '../classes/benefit';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private DataSource = new BehaviorSubject({});
  public benefitData = this.DataSource.asObservable();
    
  constructor(private http: HttpClient) { }

  login(reqBody) {
    return this.http.post<any>(`${environment.urlBase}/user/login`,reqBody);
  }

  register(reqBody) {
    return this.http.post<any>(`${environment.urlBase}/user/register`,reqBody);
  }

  getAllWinConditions(projectId) {
    return this.http.get<Array<WinCondition>>(`${environment.urlBase}/project/${projectId}/winconditions`);
  }

  voteWinCondition(winConditionId:number ,voteType:number) {
    if (voteType==1) {
      return this.http.get<any>(`${environment.urlBase}/wincondition/${winConditionId}/upvote`);
    } else if (voteType==-1){
      return this.http.get<any>(`${environment.urlBase}/wincondition/${winConditionId}/downvote`);
    } else if (voteType==0) {
      return this.http.get<any>(`${environment.urlBase}/wincondition/${winConditionId}/unvote`);
    }
  }

  voteWinConditionComment(commentId:number ,voteType:number) {
    if (voteType==1) {
      return this.http.get<any>(`${environment.urlBase}/winconditioncomment/${commentId}/upvote`);
    } else if (voteType==-1){
      return this.http.get<any>(`${environment.urlBase}/winconditioncomment/${commentId}/downvote`);
    } else if (voteType==0) {
      return this.http.get<any>(`${environment.urlBase}/winconditioncomment/${commentId}/unvote`);
    }
  }

  createWinCondition(winCondition: WinCondition, projectId: number) {
    return this.http.post<any>(`${environment.urlBase}/project/${projectId}/wincondition`, winCondition);
  }

  createWinConditionComment(winConditionId: number, comment: Comment) {
    return this.http.post<any>(`${environment.urlBase}/wincondition/${winConditionId}/comment`, comment);
  }

  createProject(project: Project) {
    return this.http.post<any>(`${environment.urlBase}/project`, project);
  }

  deleteProject(projectId: number) {
    return this.http.delete<any>(`${environment.urlBase}/project/${projectId}`);
  }

  getAllCategories(projectId: number) {
    return this.http.get<any>(`${environment.urlBase}/project/${projectId}/categories`);
  }

  createCategory(projectId: number, category: Category) {
    return this.http.post<any>(`${environment.urlBase}/project/${projectId}/category`, category);
  }

  updatePrioritizationValuesWinConditions(winconditions: any) {
    // Fix, put the correct URL for this function request
    return this.http.post<any>(`${environment.urlBase}/wincondition/updateWinConditions`, winconditions);
  }

  /**********************************BENEFITS********************************/
  public getAllBenefits(projectId: number)
    {
        console.log("Getting benefits for project from the backend...");

        this.benefitData = this.http.get(`${environment.urlBase}/project/${projectId}/benefits`);
        return this.benefitData;
    }

    public createBenefit(projectId: number, newBenefit: Benefit)
    {
        console.log("Adding new benefit to this project in the backend..." + newBenefit);

        this.benefitData = this.http.post<any>(`${environment.urlBase}/project/${projectId}/benefit`, newBenefit);
        return this.benefitData;
    }

    public updateBenefit(updatedBenefit: Benefit, benefitId: Number)
    {
      console.log("Updating benefit value in the backend...");
      this.benefitData = this.http.put<any>(`${environment.urlBase}/benefit/${benefitId}`, updatedBenefit);
      return this.benefitData;
    }

    public deleteBenefit(benefitId: number){
      console.log("Deleting benefit from the backend...");
      this.benefitData = this.http.delete(`${environment.urlBase}/benefit/`+benefitId);
      return this.benefitData;

    }
}
