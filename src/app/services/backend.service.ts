import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { WinCondition } from '../classes/win-condition';
import { Comment } from '../classes/comment';


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

  createWinConditionComment(winConditionId: number, comment: Comment) {
    return this.http.post<any>(`${environment.urlBase}/wincondition/${winConditionId}/comment`, comment);
  }

  updatePrioritizationValuesWinConditions() {
    // Fix, put the correct URL for this function request
    return this.http.put<any>(`${environment.urlBase}/wincondition/${winConditionId}/comment`, comment);
  }
}
