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


  constructor(private backendService: BackendService) {
    //this.updateWinConditions(); //TODO: Fix this, we should parse all projects etc...
    console.log("Wincondition constructor called");
  }

  updateWinConditions(){
    const obj = this.backendService.getAllWinConditions(1);
    obj.subscribe((data) => {
      /*
      const winConditionArray = data.map((elem)=> {
          return new WinCondition(elem);
      });
      */
     console.log("Received win conditions : "+data)
      this.winConditionSource.next(data);
    });
    return obj;
  }

  handleVote(winConditionId:number , commentId:number, voteType:number) {
    if (winConditionId && commentId) {
      console.error("Critical Error! Vote component should have either winconditionID or commentId, not BOTH" );
      return false;
    }
    let obj;
    if (winConditionId) {
        obj = this.backendService.voteWinCondition(winConditionId,voteType);
    } else if (commentId) {
        obj = this.backendService.voteWinConditionComment(commentId,voteType);
    } else{
      console.error("Critical error! Vote object doesn't have winconditionId or commentId");
      return false;
    }
    obj.subscribe((data) => {
      console.log("Vote response: "+data);
    })

  }
}
