import { List } from './../models/list.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterComplete',
  pure: false
})
export class FilterCompletePipe implements PipeTransform {

  transform(lists: List[], completed: boolean = true): List[] {
    return lists.filter(dataList => dataList.complete === completed);
  }

}
