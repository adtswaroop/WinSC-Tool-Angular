import { Subscription } from 'rxjs';
import { WinconditionService } from './../../services/wincondition.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-win-holder-priorization',
  templateUrl: './win-holder-priorization.component.html',
  styleUrls: ['./win-holder-priorization.component.css']
})
export class WinHolderPriorizationComponent implements OnInit {

  sortStates;
  currentSortState;
  winConditions;
  businessValue;
  relativePenalty;
  easeRealization;
  winHolderPriorizationService;
  private wSub: Subscription;

  constructor(private winconditionService :WinconditionService) {
    this.wSub = this.winconditionService.winConditionData.subscribe((data) => {
        this.winConditions = data;
    });
  }

  ngOnInit() {
    this.businessValue = 50;
    this.relativePenalty = 50;
    this.easeRealization = 50;
  }

  sortByLeastPriority(pWinConditions) {
    var clonePWinConditions = pWinConditions.slice(0);
    clonePWinConditions.sort(function(a, b){

      var aPriority = 0; //Modify this to take the priority of a
      var bPriority = 0; //Modify this to take the priority of b
      return bPriority - aPriority;
    });
    return clonePWinConditions;
  }

  sortByHighestPriority(pWinConditions) {
    var clonePWinConditions = pWinConditions.slice(0);
    clonePWinConditions.sort(function(a, b){
      var aPriority = 0; //Modify this to take the priority of a
      var bPriority = 0; //Modify this to take the priority of b
      return aPriority - bPriority;
    });
    return clonePWinConditions;
  }

  sort(currentSortStateChange) {

  }

  changeValue(){

  }

  ngOnDestroy(): void {
    this.wSub.unsubscribe();
  }


}
