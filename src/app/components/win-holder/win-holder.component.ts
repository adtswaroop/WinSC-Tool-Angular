import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-win-holder',
  templateUrl: './win-holder.component.html',
  styleUrls: ['./win-holder.component.css']
})
export class WinHolderComponent implements OnInit {

  sortStates;
  currentSortState;

  constructor() { }

  ngOnInit() {
  }

  sortByMostLikes() {
  }

  sortByLeastLikes() {
  }

}
