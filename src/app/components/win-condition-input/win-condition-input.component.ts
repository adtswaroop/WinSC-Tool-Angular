import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-win-condition-input',
  templateUrl: './win-condition-input.component.html',
  styleUrls: ['./win-condition-input.component.css']
})
export class WinConditionInputComponent implements OnInit {

  @Input() value: number;
  @Input() label: string;
  @Input() type: string;
  @Output() valueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  changeValue() {
  
  }

}
