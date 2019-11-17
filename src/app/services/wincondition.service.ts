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
    this.updateWinConditions(); //TODO: Fix this, we should parse all projects etc...
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
      this.winConditionSource.next(data);
    });
    return obj;
  }
}
