import { Pipe, PipeTransform } from '@angular/core';
import { WinCondition } from '../classes/win-condition';

@Pipe({
  name: 'winConditionSort'
})
export class WinConditionSortPipe implements PipeTransform {

  transform(winconditions: WinCondition[], sortState: string ): any {
    if (sortState === 'Most Likes') {
      return this.sortByLikes(winconditions, true);
    } else if (sortState === 'Least Likes') {
      return this.sortByLikes(winconditions, false);
    } else if (sortState === 'Newest') {
      return this.sortByDate(winconditions,true);
    } else if (sortState === 'Oldest') {
      return this.sortByDate(winconditions,false);

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
