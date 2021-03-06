import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { WinCondition } from '../classes/win-condition';
import { Comment } from '../classes/comment';
import { Project } from '../classes/project';
import { Category } from '../classes/category';
import { User } from '../classes/user';


@Injectable({
  providedIn: 'root'
})

export class BackendService {

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

  deleteWinCondition(winConditionId: number) {
    return this.http.delete<any>(`${environment.urlBase}/wincondition/${winConditionId}/`);
  }

  createWinConditionComment(winConditionId: number, comment: Comment) {
    return this.http.post<any>(`${environment.urlBase}/wincondition/${winConditionId}/comment`, comment);
  }

  deleteWinConditionComment(winConditionCommentId: number) {
    return this.http.delete<any>(`${environment.urlBase}/winconditioncomment/${winConditionCommentId}`);
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

  deleteCategory(categoryId: number) {
    return this.http.delete<any>(`${environment.urlBase}/category/${categoryId}/`);
  }

  updatePrioritizationValuesWinConditions(winconditions: any) {
    // Fix, put the correct URL for this function request
    return this.http.post<any>(`${environment.urlBase}/wincondition/updateWinConditions`, winconditions);
  }

  getUser() {
    return this.http.get<User>(`${environment.urlBase}/user`);
  }

  putUser(userInfo : User) {
    return this.http.put<any>(`${environment.urlBase}/user`, userInfo);
  }

  getSingpleProject(projectId: number) {
    return this.http.get<any>(`${environment.urlBase}/project/${projectId}/`);
  }
}
