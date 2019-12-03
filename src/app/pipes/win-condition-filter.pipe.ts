import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../classes/category';
import { WinCondition } from '../classes/win-condition';

@Pipe({
  name: 'winConditionFilter'
})
export class WinConditionFilterPipe implements PipeTransform {

  transform(winConditions: WinCondition[], categories: Category[]): any {
    const selectedIds = categories.map((category) => category.id);
    if (!winConditions) {
      return [];
    }
    if (categories.length === 0) {
      return winConditions;
    }

    return  winConditions.filter((winCondition) => {
      return winCondition.categories.find((cat) => {
          return selectedIds.includes(cat.id);
      });
    });
  }

}
