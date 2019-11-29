import { Pipe, PipeTransform } from '@angular/core';
import { WinCondition } from '../classes/win-condition';

@Pipe({
  name: 'winConditionSort'
})
export class WinConditionSortPipe implements PipeTransform {

  transform(winconditions: WinCondition[], sortState: string ): any {
    if (sortState === 'Most Likes') {
      return this.sortByLikes(winconditions, true);
    } else {
      return this.sortByLikes(winconditions, false);
    }
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
