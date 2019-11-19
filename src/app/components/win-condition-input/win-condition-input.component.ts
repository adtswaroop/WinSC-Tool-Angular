import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-win-condition-input',
  templateUrl: './win-condition-input.component.html',
  styleUrls: ['./win-condition-input.component.css']
})
export class WinConditionInputComponent implements OnInit {

  @Input() value: number;
  @Input() winConditionId: number;
  @Input() label: string;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

  changeValue(newValue) {
    console.log("Wincondition Id: "+this.winConditionId+" "+this.label+" value is updated to: ");
    console.log(newValue);
  }

}
