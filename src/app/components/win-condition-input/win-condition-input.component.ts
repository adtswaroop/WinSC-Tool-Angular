import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WinCondition } from '../../classes/win-condition';

@Component({
  selector: 'app-win-condition-input',
  templateUrl: './win-condition-input.component.html',
  styleUrls: ['./win-condition-input.component.css']
})
export class WinConditionInputComponent implements OnInit {

  @Input() winCondition: WinCondition;
  @Input() value: number;
  @Input() name: string;
  @Input() type: string;
  @Output() winConditionChange = new EventEmitter<WinCondition>();
  @Output() enableSaveButton = new EventEmitter<boolean>();
  inputClass;
  inputValid;

  constructor() {
    this.inputClass = {};
  }

  ngOnInit() {
    this.inputValidateValue(this.value);
  }

  changeValue(newValue) {

    this.inputValidateValue(newValue);

    if(this.name == "Business value"){
      this.winCondition.businessValue = newValue;
    }
    else if(this.name == "Relative penalty") {
      this.winCondition.relativePenalty = newValue;
    }
    else {
      this.winCondition.easeOfRealization = newValue;
    }
    this.winConditionChange.emit(this.winCondition);
  }

  inputValidateValue(pValue){
    this.inputValid = this.validateValue(pValue);
    if(this.validateValue(pValue)){
      this.enableSaveButton.emit(false);
      this.inputClass = {};
    }
    else {
      this.enableSaveButton.emit(true);
      this.enableSaveButton.emit(true);
      this.inputClass = {"input-red":true};
    }
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

}
