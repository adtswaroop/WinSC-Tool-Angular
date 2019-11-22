import { Subscription } from 'rxjs';
import { ProjectService } from './../../services/project/project.service';
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
  project;
  businessValue;
  relativePenalty;
  easeRealization;
  winHolderPriorizationService;
  private wSub: Subscription;
  private pSub: Subscription;

  constructor(private winconditionService :WinconditionService, private projectService :ProjectService) {
    this.wSub = this.winconditionService.winConditionData.subscribe((data) => {
        this.winConditions = data;
    });
    this.pSub = this.projectService.joinedProjectListData.subscribe((data) => {
        for (let i = 0; i < data.length; i++) {
          if(data[i].id == this.projectService.activeProjectData){
            this.project = data[i];
          }
        }
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

  updatePrioritizationValuesProjectWinConditions() {
    this.winconditionService.updatePrioritizationValuesWinConditions(this.winConditions);
    // We need to add the project to update here
    this.winconditionService.updateProject();
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

  changeValue(){

  }

  ngOnDestroy(): void {
    this.wSub.unsubscribe();
  }


}
