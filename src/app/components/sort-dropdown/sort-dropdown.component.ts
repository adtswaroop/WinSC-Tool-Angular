import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-dropdown',
  templateUrl: './sort-dropdown.component.html',
  styleUrls: ['./sort-dropdown.component.css']
})
export class SortDropdownComponent implements OnInit {

  sortStates;
  @Input() currentSortState: string;
  @Output() currentSortStateChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeSortState() {
  }

}
