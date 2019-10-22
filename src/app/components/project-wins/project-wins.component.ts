import { Component, OnInit, ViewChild } from '@angular/core';
import { WinHolderComponent } from '../win-holder/win-holder.component';

@Component({
  selector: 'app-project-wins',
  templateUrl: './project-wins.component.html',
  styleUrls: ['./project-wins.component.css']
})


export class ProjectWinsComponent implements OnInit {
  @ViewChild(WinHolderComponent) winHolder : WinHolderComponent;

  constructor() { }

  ngOnInit() {
  }

  onCategoryChange(event){
    console.log("I got it babe ");
    let res =  new Array<string>();
    event.forEach(element => {
      res.push(element.name);
    });
    this.winHolder.categorize(res);
  }

}
