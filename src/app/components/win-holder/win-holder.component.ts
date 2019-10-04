import { Component, OnInit } from '@angular/core';
import { WinCondition } from '../../classes/win-condition';
import { categories } from '../category-holder/dummyCategories';

@Component({
  selector: 'app-win-holder',
  templateUrl: './win-holder.component.html',
  styleUrls: ['./win-holder.component.css']
})
export class WinHolderComponent implements OnInit {

  sortStates;
  currentSortState;
  categories;
  currentCategory;
  winConditionsArray;
  winConditions;

  constructor() {
  }

  ngOnInit() {
    this.sortStates = ["MostLikes", "LeastLikes"];
    this.currentSortState = "MostLikes";
    this.categories = categories.values;
    this.currentCategory = "None";
    this.winConditions = [new WinCondition(["1","2","3","4"], ["1"], 1, "Carlos Santana", 1, 1, ["UI"], "win condition text 1", [])];
    this.winConditions.push(new WinCondition(["1","2","3"], ["1","2"], 2, "Carlos Santana", 2, 2, ["UI"], "win condition text 2", []));
    this.winConditions.push(new WinCondition(["1"], ["1","2"], 3, "Carlos Santana", 3, 3, ["UI"], "win condition text 3", []));
    this.sort("MostLikes");
  }

  sortByMostLikes(pWinConditions) {
    var clonePWinConditions = pWinConditions.slice(0);
    clonePWinConditions.sort(function(a, b){
      var aTotalVotes = a.upVoters.length - a.downVoters.length;
      var bTotalVotes = b.upVoters.length - b.downVoters.length;
      return bTotalVotes - aTotalVotes;
    });
    return clonePWinConditions;
  }

  sortByLeastLikes(pWinConditions) {
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

  categorize(currentCategoryChange){
    this.currentCategory = currentCategoryChange;
  }
  
  createWinConditionHandler(pEvent) {
    var newWinCondition = pEvent;
    this.winConditions = this.createWinCondition(newWinCondition, this.winConditions);
    this.sort(this.currentSortState);
  }

  createWinCondition(pWinCondition, pWinConditions) {
    var clonePWinConditions = pWinConditions.slice(0);
    clonePWinConditions.push(pWinCondition);
    return clonePWinConditions;
  }

}
