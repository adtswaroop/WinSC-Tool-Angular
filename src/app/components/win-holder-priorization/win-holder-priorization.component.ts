import { Subscription } from 'rxjs';
import { WinconditionService } from './../../services/wincondition.service';
import { ProjectService } from './../../services/project/project.service';
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
  winHolderPriorizationService;
  private wSub: Subscription;
  private pSub: Subscription;

  constructor(private winconditionService :WinconditionService, private projectService :ProjectService) {
    this.wSub = this.winconditionService.winConditionData.subscribe((data) => {
        this.winConditions = data;
    });

    this.pSub = this.projectService.getActiveProjectObject.subscribe((data) => {
      this.project = data;
    });
  }

  ngOnInit() {
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

  updatePrioritizationValuesProjectWinConditions() {
    this.winconditionService.updatePrioritizationValuesWinConditions(this.winConditions);
    // We need to add the project to update here
    this.projectService.updateProject(this.project);
  }


}
