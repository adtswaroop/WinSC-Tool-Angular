import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-dropdown',
  templateUrl: './sort-dropdown.component.html',
  styleUrls: ['./sort-dropdown.component.css']
})
export class SortDropdownComponent implements OnInit {

  @Input() sortStates: string;
  @Input() currentSortState: string;
  @Output() currentSortStateChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeSortState(pState) {
  	this.currentSortState = pState;
  	this.currentSortStateChange.emit(pState);
  }

}
