import { Component, OnInit } from '@angular/core';
import { WinCondition } from 'src/app/classes/win-condition';

@Component({
  selector: 'app-win-holder',
  templateUrl: './win-holder.component.html',
  styleUrls: ['./win-holder.component.css']
})
export class WinHolderComponent implements OnInit {

  sortStates;
  currentSortState;
  winConditionsArray;

  constructor() {
    this.sortStates = ["Sort1", "Sort2"];
    this.currentSortState = "Sort1";
    this.winConditionsArray = new Array<String>();
  }

  ngOnInit() {
  }

  sortByMostLikes() {
  }

  sortByLeastLikes() {
  }

  sort(currentSortStateChange) {
    console.log("sort");
  }

  postWinCondition(addWinCondition) {
    this.winConditionsArray.push(addWinCondition);
    console.log(this.winConditionsArray);
    // TODO: update view
  }

}
