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
  enableSave;
  currentSortState;
  winConditions;
  project;
  winHolderPriorizationService;
  private wSub: Subscription;
  private pSub: Subscription;
  inputProjectBusinessClass;
  inputProjectPenaltyClass;
  inputProjectEaseClass;

  constructor(private winconditionService :WinconditionService, private projectService :ProjectService) {
    this.wSub = this.winconditionService.winConditionData.subscribe((data) => {
        this.winConditions = data;
    });

    this.pSub = this.projectService.getActiveProjectObject.subscribe((data) => {
      this.project = data;
    });

    this.enableSave=false;

    this.validateWinconditionsValues();
    this.inputProjectBusinessClass = {"slider-input": true};
    this.inputProjectPenaltyClass = {"slider-input": true};
    this.inputProjectEaseClass = {"slider-input": true};
  }

  ngOnInit() {
    this.currentSortState = "Score";
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

  setEnableSave(enableSave){
    this.enableSave=enableSave;
  }

  validateWinconditionsValues(){
    var allWinconditionsValid = true;
    for (let i = 0; i < this.winConditions.length && allWinconditionsValid == true; i++) {
      allWinconditionsValid = (this.validateValue(this.winConditions[i].businessValue) && this.validateValue(this.winConditions[i].relativePenalty)) && this.validateValue(this.winConditions[i].easeOfRealization);
    }
    var disable = !allWinconditionsValid;
    this.setEnableSave(disable);
  }

  validateProjectValues(){
    var allValuesValid = true;

    allValuesValid = (this.validateValue(this.project.businessValueWeight) && this.validateValue(this.project.relativePenaltyWeight)) && this.validateValue(this.project.easeOfRealizationWeight);

    var disable = !allValuesValid;
    console.log(disable);
    this.setEnableSave(disable);
  }

  validateValue(pValue){
    var valid = true;
    if(!this.validateMinValue(pValue)){
      valid = false;
    }
    if(!this.validateMaxValue(pValue)){
      valid = false;
    }

    return valid;
  }

  validateMinValue(pValue) {
    return pValue >=0;
  }

  validateMaxValue(pValue) {
    return pValue <=100;
  }

  validateNonEmpty(pValue) {
    return pValue != 0;
  }

  inputValidateValueProjectBusiness(pValue){
    if(this.validateValue(pValue)){
      this.inputProjectBusinessClass = {"slider-input": true};
    }
    else {
      this.inputProjectBusinessClass = {"input-red":true, "slider-input": true};
    }
  }

  inputValidateValueProjectPenalty(pValue){
    if(this.validateValue(pValue)){
      this.inputProjectPenaltyClass = {"slider-input": true};
    }
    else {
      this.inputProjectPenaltyClass = {"input-red":true,"slider-input": true};
    }
  }

  inputValidateValueProjectEase(pValue){
    if(this.validateValue(pValue)){
      this.inputProjectEaseClass = {"slider-input": true};
    }
    else {
      this.inputProjectEaseClass = {"input-red":true, "slider-input": true};
    }
  }
}
