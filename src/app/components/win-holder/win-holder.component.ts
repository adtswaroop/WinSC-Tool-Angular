import { Component, OnInit, OnDestroy } from '@angular/core';
import { WinCondition } from '../../classes/win-condition';
import { WinconditionService } from 'src/app/services/wincondition.service';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/classes/category';

@Component({
  selector: 'app-win-holder',
  templateUrl: './win-holder.component.html',
  styleUrls: ['./win-holder.component.css']
})
export class WinHolderComponent implements OnInit, OnDestroy {

  sortStates;
  currentSortState;
  currentCategory;
  winConditionsArray;
  origWinConditions;
  selectedCategories: Array<Category>;
  private wSub: Subscription;
  private cSub: Subscription;
  public winConditions: Array<WinCondition>;

  constructor(private winconditionService: WinconditionService, private categoryService: CategoryService) {
    this.wSub = this.winconditionService.winConditionData.subscribe((data: Array<WinCondition>) => {
      this.winConditions = data;
    });

    this.cSub = this.categoryService.getSelectedCategories.subscribe((data) => {
      this.selectedCategories = data;
    });
  }

  ngOnInit() {
    this.sortStates = ["MostLikes", "LeastLikes"];
    this.currentSortState = "MostLikes";
  }

  sortByMostLikes(pWinConditions) {
    var clonePWinConditions = pWinConditions.slice(0);
    clonePWinConditions.sort(function(a, b){
      var aTotalVotes = a.upvoters.length - a.downvoters.length;
      var bTotalVotes = b.upvoters.length - b.downvoters.length;
      return bTotalVotes - aTotalVotes;
    });
    return clonePWinConditions;
  }

  sortByLeastLikes(pWinConditions) {
    var clonePWinConditions = pWinConditions.slice(0);
    clonePWinConditions.sort(function(a, b){
      var aTotalVotes = a.upvoters.length - a.downvoters.length;
      var bTotalVotes = b.upvoters.length - b.downvoters.length;
      return aTotalVotes - bTotalVotes;
    });
    return clonePWinConditions;
  }


  sort() {

    // TODO: This wont work if we don't re-request the data from the backend after each vote, which will be too heavy for the server.
    // We should somehow use the votecomponent score to sort the win conditions. Idea: use viewchildren to get score from wincondition component.
    if(this.currentSortState == "MostLikes"){
      this.winConditions = this.sortByMostLikes(this.winConditions);
    }
    else if(this.currentSortState  == "LeastLikes"){
      this.winConditions = this.sortByLeastLikes(this.winConditions);
    }
  }


  createWinConditionHandler(pEvent) {
    var newWinCondition = pEvent;
    this.winConditions = this.createWinCondition(newWinCondition, this.winConditions);
    this.sort();
  }

  createWinCondition(pWinCondition, pWinConditions) {
    var clonePWinConditions = pWinConditions.slice(0);
    clonePWinConditions.push(pWinCondition);
    return clonePWinConditions;
  }

  ngOnDestroy(): void {
    this.wSub.unsubscribe();
    this.cSub.unsubscribe();
  }


}
