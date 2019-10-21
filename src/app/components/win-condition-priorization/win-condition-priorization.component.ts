import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-win-condition-priorization',
  templateUrl: './win-condition-priorization.component.html',
  styleUrls: ['./win-condition-priorization.component.css']
})
export class WinConditionPriorizationComponent implements OnInit {

  @Input() winCondition;

  constructor() { }

  ngOnInit() {
  }

}
