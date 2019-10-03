import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-win-holder',
  templateUrl: './win-holder.component.html',
  styleUrls: ['./win-holder.component.css']
})
export class WinHolderComponent implements OnInit {

  sortStates;
  currentSortState;

  constructor() {
    this.sortStates = ["Sort1", "Sort2"];
    this.currentSortState = "Sort1";
  }

  ngOnInit() {
  }

  sortByMostLikes() {
  }

  sortByLeastLikes() {
  }

}
