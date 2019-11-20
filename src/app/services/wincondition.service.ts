import { ProjectService } from './project/project.service';
import { Injectable } from '@angular/core';
import {BackendService} from './backend.service';
import { BehaviorSubject, ObjectUnsubscribedError } from 'rxjs';
import { WinCondition } from '../classes/win-condition';

@Injectable({
  providedIn: 'root'
})
export class WinconditionService {

  private winConditionSource = new BehaviorSubject<Array<WinCondition>>([]);
  public winConditionData = this.winConditionSource.asObservable();
  private activeProjectId;
  constructor(private backendService: BackendService, private projectService: ProjectService) {
    this.projectService.getActiveProject.subscribe((projectId) => {
        this.updateWinConditions(projectId);
        this.activeProjectId = projectId;
    });
  }

  updateWinConditions(projectId) {
    if (projectId < 0) {
      this.winConditionSource.next([]);
      return;
    }
    const obj = this.backendService.getAllWinConditions(projectId);
    obj.subscribe((data) => {
      /*
      const winConditionArray = data.map((elem)=> {
          return new WinCondition(elem);
      });
      */
     console.log('Received win conditions : ' + data);
     this.winConditionSource.next(data);
    });
    return obj;
  }

  handleVote(winConditionId: number , commentId: number, voteType: number) {
    if (winConditionId && commentId) {
      console.error('Critical Error! Vote component should have either winconditionID or commentId, not BOTH' );
      return false;
    }
    let obj;
    if (winConditionId) {
        obj = this.backendService.voteWinCondition(winConditionId, voteType);
    } else if (commentId) {
        obj = this.backendService.voteWinConditionComment(commentId, voteType);
    } else {
      console.error('Critical error! Vote object doesn\'t have winconditionId or commentId');
      return false;
    }
    obj.subscribe((data) => {
      console.log('Vote response: ' + data);
    });
  }

  createWincondition(wincondition: WinCondition) {
    const obs = this.backendService.createWinCondition(wincondition,this.activeProjectId);
    obs.subscribe((data) => {
      const arr = this.winConditionSource.value;
      arr.push(wincondition);
      this.winConditionSource.next(arr);
    }, (error) => {
      console.log('Failed to add a new wincondition');
    });
  }
}
