import { Component, OnInit, OnDestroy } from '@angular/core';
import { WinCondition } from '../../classes/win-condition';
import { categories } from '../category-holder/dummyCategories';
import { WinconditionService } from 'src/app/services/wincondition.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-win-holder',
  templateUrl: './win-holder.component.html',
  styleUrls: ['./win-holder.component.css']
})
export class WinHolderComponent implements OnInit, OnDestroy {

  sortStates;
  currentSortState;
  categories;
  currentCategory;
  winConditionsArray;
  origWinConditions;
  private wSub: Subscription;
  private winConditions: Array<WinCondition>;

  constructor(private winconditionService: WinconditionService) {
    this.wSub = this.winconditionService.winConditionData.subscribe((data: Array<WinCondition>) => {
      this.winConditions = data;
      this.sort();
    });
  }

  ngOnInit() {
    this.sortStates = [ "LeastLikes","MostLikes"];
    this.categories = categories;
    this.currentCategory = "None";
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

    if(this.currentSortState == "MostLikes"){
      this.winConditions = this.sortByMostLikes(this.winConditions);
    }
    else if(this.currentSortState  == "LeastLikes"){
      this.winConditions = this.sortByLeastLikes(this.winConditions);
    }
  }

  categorize(currentCategoryChange : Array<string>){
    if (currentCategoryChange.length===0) {
      this.winConditions = this.origWinConditions.slice();
      return;
    }
    this.winConditions = this.origWinConditions.filter((item) => {
            return item.categories.find((cat) => {
                return currentCategoryChange.includes(cat.name);
            });

    });
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
  }


}
