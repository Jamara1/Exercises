import { List } from './../../models/list.model';
import { Component } from '@angular/core';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lists: List[] = []

  constructor(public _wishesService: WishesService) {
    this.lists = _wishesService.lists;
  }

}
