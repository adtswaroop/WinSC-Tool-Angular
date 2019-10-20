import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-win-holder-priorization',
  templateUrl: './win-holder-priorization.component.html',
  styleUrls: ['./win-holder-priorization.component.css']
})
export class WinHolderPriorizationComponent implements OnInit {

  sortStates;
  currentSortState;
  winConditions;

  constructor() { }

  ngOnInit() {
  }

  sortByLeastPriority(pWinConditions) {
    var clonePWinConditions = pWinConditions.slice(0);
    clonePWinConditions.sort(function(a, b){
      var aTotalVotes = a.upVoters.length - a.downVoters.length;
      var bTotalVotes = b.upVoters.length - b.downVoters.length;
      return bTotalVotes - aTotalVotes;
    });
    return clonePWinConditions;
  }

  sortByHighestPriority(pWinConditions) {
    var clonePWinConditions = pWinConditions.slice(0);
    clonePWinConditions.sort(function(a, b){
      var aTotalVotes = a.upVoters.length - a.downVoters.length;
      var bTotalVotes = b.upVoters.length - b.downVoters.length;
      return aTotalVotes - bTotalVotes;
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
