import { Component, OnInit } from '@angular/core';
import { WinCondition } from '../../classes/win-condition';

@Component({
  selector: 'app-win-holder',
  templateUrl: './win-holder.component.html',
  styleUrls: ['./win-holder.component.css']
})
export class WinHolderComponent implements OnInit {

  sortStates;
  currentSortState;
  winConditions;

  constructor() {
    this.sortStates = ["Sort1", "Sort2"];
    this.currentSortState = "Sort1";
    this.winConditions = [new WinCondition(["1","2"], ["1","2"], 1, "Carlos", 1, 1, ["UI"], "win condition text 1", [])];
    this.winConditions.push(new WinCondition(["1","2"], ["1","2"], 2, "Carlos", 2, 2, ["UI"], "win condition text 2", []));
    this.winConditions.push(new WinCondition(["1","2"], ["1","2"], 3, "Carlos", 3, 3, ["UI"], "win condition text 3", []));
    console.log(this.winConditions[0]);
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

}
