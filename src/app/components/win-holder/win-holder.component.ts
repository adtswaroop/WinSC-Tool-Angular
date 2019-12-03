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
      console.log(this.winConditions)
    });

    this.cSub = this.categoryService.getSelectedCategories.subscribe((data) => {
      this.selectedCategories = data;
    });
  }

  ngOnInit() {
    this.sortStates = ["Most Likes", "Least Likes"];
    this.currentSortState = "Most Likes";
  }

  handleSortState(state) {
    this.currentSortState = state;
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
