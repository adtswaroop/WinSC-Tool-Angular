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
  @Input() label: string;
  @Input() type: string;
  @Output() winConditionChange = new EventEmitter<WinCondition>();

  constructor() { }

  ngOnInit() {
  }

  changeValue(newValue) {
    if(this.label == "Business value"){
      this.winCondition.businessValue = newValue;
    }
    else if(this.label == "Relative penalty") {
      this.winCondition.relativePenalty = newValue;
    }
    else {
      this.winCondition.easeOfRealization = newValue;
    }
    this.winConditionChange.emit(this.winCondition);
  }

}
