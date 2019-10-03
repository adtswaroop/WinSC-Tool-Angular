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
    this.sortStates = ["MostLikes", "LeastLikes"];
    this.currentSortState = "MostLikes";
    this.winConditions = [new WinCondition(["1","2"], ["1"], 1, "Carlos", 1, 1, ["UI"], "win condition text 1", [])];
    this.winConditions.push(new WinCondition(["1","2","3"], ["1","2"], 2, "Carlos", 2, 2, ["UI"], "win condition text 2", []));
    this.winConditions.push(new WinCondition(["1"], ["1","2"], 3, "Carlos", 3, 3, ["UI"], "win condition text 3", []));
  }

  ngOnInit() {
  }

  sortByMostLikes(pWinConditions) {
    var clonePWinConditions = pWinConditions.slice(0);
    clonePWinConditions.sort(function(a, b){
      return b.upVoters.length - a.upVoters.length;
    });
    return clonePWinConditions;
  }

  sortByLeastLikes(pWinConditions) {
    var clonePWinConditions = pWinConditions.slice(0);
    clonePWinConditions.sort(function(a, b){
      return a.upVoters.length - b.upVoters.length;
    });
    return clonePWinConditions;
  }

  sort(currentSortStateChange) {
    this.currentSortState = currentSortStateChange;
    if(currentSortStateChange == "MostLikes"){
      this.winConditions = this.sortByMostLikes(this.winConditions);
    }
    else if(currentSortStateChange == "LeastLikes"){
      this.winConditions = this.sortByLeastLikes(this.winConditions);
    }
  }

}
