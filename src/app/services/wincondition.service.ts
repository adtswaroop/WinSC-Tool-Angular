import { ProjectService } from './project/project.service';
import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { BehaviorSubject } from 'rxjs';
import { WinCondition } from '../classes/win-condition';
import { Comment } from '../classes/comment';
import { User } from '../classes/user';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class WinconditionService {

  private winConditionSource = new BehaviorSubject<Array<WinCondition>>([]);
  public winConditionData = this.winConditionSource.asObservable();
  private activeProjectId;
  constructor(private backendService: BackendService, private projectService: ProjectService, private authenticationService: AuthenticationService) {
    this.projectService.getActiveProjectId.subscribe((projectId) => {
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
      /*
      const arr = this.winConditionSource.value;
      arr.push(wincondition);
      this.winConditionSource.next(arr);
      // TODO: this won't work because we don't know the id of newly created win condition, we can't post comments to it
      */
      this.updateWinConditions(this.activeProjectId); // TODO: we can optimize these by getting the win conditions as result
    }, (error) => {
      console.log('Failed to add a new wincondition');
    });
  }

  createWinConditionComment(wincondition: WinCondition, comment: Comment) {
    const obs = this.backendService.createWinConditionComment(wincondition.id, comment);
    obs.subscribe((data) => {
      console.log(data);
      data.upvoters = [];
      data.downvoters = [];
      data.user = new User();
      data.user.firstName = this.authenticationService.currentUserValue.firstName;
      data.user.lastName = this.authenticationService.currentUserValue.lastName;
      wincondition.comments.push(data);
      //this.updateWinConditions(this.activeProjectId); // TODO: we can optimize these by getting the win conditions as result
    });
  }

  updatePrioritizationValuesWinConditions(winconditions: Array<WinCondition>) {
      const requestBody = {'winConditions': winconditions};



      const obs = this.backendService.updatePrioritizationValuesWinConditions(requestBody);
      obs.subscribe((data) => {
          this.updateWinConditions(this.activeProjectId);
      }, (error) => {
        console.log(error);
      });

  }
}
