import { Component, OnInit } from '@angular/core';
import { DummyData } from '../../classes/dummy-data';
import { WinHolderPriorizationService } from '../../services/win-holder-priorization/win-holder-priorization.service';



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

  constructor(winHolderPriorizationService: WinHolderPriorizationService) {
    this.winHolderPriorizationService = winHolderPriorizationService;
  }

  ngOnInit() {
    this.businessValue = 50;
    this.relativePenalty = 50;
    this.easeRealization = 50;
    this.winConditions = new DummyData().wcArr;
    this.getRequestWinConditions();
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

  updateBusinessValue(sliderChangeEvent) {
    console.log(sliderChangeEvent.value);
  }

  updateRelativePenalty(sliderChangeEvent) {
    console.log(sliderChangeEvent.value);
  }

  updateEaseRealization(sliderChangeEvent) {
    console.log(sliderChangeEvent.value);
  }

  getRequestWinConditions() {

    var pthis = this;

    this.winHolderPriorizationService.getWinConditions()
      .subscribe({next: pWinConditions => {
        pthis.winConditions = pWinConditions.winConditions;
      } });
  }

}
