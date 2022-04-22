import { List } from './../models/list.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List[] = [];

  constructor() {
    const list1 = new List('Collect infinity stones');
    const list2 = new List('Heroes to disappear');

    this.lists.push(list1, list2)
  }
}
