import { Pipe, PipeTransform } from '@angular/core';
import { WinCondition } from '../classes/win-condition';

@Pipe({
  name: 'winConditionSort'
})
export class WinConditionSortPipe implements PipeTransform {

  transform(winconditions: WinCondition[], sortState: string ): any {
    if (sortState === 'Most Agreed') {
      return this.sortByLikes(winconditions, true);
    } else if (sortState === 'Least Agreed') {
      return this.sortByLikes(winconditions, false);
    } else if (sortState === 'Newest') {
      return this.sortByDate(winconditions,true);
    } else if (sortState === 'Oldest') {
      return this.sortByDate(winconditions,false);
    } else if (sortState=== 'Score') {
      return this.sortByScore(winconditions,true);
    }
  }

  sortByDate(winConditions, asc:Boolean) {
    const cloneWinConditions = winConditions.slice(0);
    cloneWinConditions.sort((a:WinCondition, b:WinCondition) => {
      if (asc) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      } else {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
    });
    return cloneWinConditions;
  }

  sortByScore(winConditions, asc: Boolean) {
    const cloneWinConditions = winConditions.slice(0);
    cloneWinConditions.sort((a:WinCondition, b:WinCondition) => {
      if (asc) {
        return b.prioritizationScore-a.prioritizationScore;
      } else {
        return a.prioritizationScore-b.prioritizationScore;
      }
    });
    return cloneWinConditions;
  }

  sortByLikes(winConditions, asc: boolean) {
    const cloneWinConditions = winConditions.slice(0);
    cloneWinConditions.sort((a, b) => {
      const aTotalVotes = a.upvoters.length - a.downvoters.length;
      const bTotalVotes = b.upvoters.length - b.downvoters.length;
      if (asc) {
        return bTotalVotes - aTotalVotes;
      } else {
        return aTotalVotes - bTotalVotes;
      }
    });
    return cloneWinConditions;
  }

}
