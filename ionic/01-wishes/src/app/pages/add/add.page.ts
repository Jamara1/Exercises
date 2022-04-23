import { ListItem } from './../../models/list-item.model';
import { List } from './../../models/list.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  nameItem: string = '';

  constructor(
    private _wishesService: WishesService,
    private activatedRoute: ActivatedRoute
  ) {
    const listId = activatedRoute.snapshot.paramMap.get('id');
    this.list = _wishesService.getList(listId);
  }

  ngOnInit() {
  }

  addItem() {
    if (this.nameItem.length === 0) {
      return;
    }

    const newItem = new ListItem(this.nameItem);
    this.list.items.push(newItem);

    this.nameItem = '';
    this.list.completeAt = null;
    this.list.complete = false;

    this._wishesService.saveStorage();
  }

  changeCheck(item: ListItem) {
    const terminated = this.list.items
      .filter(itemData => !itemData.complete).length;

    if (terminated === 0) {
      this.list.completeAt = new Date();
      this.list.complete = true;
    } else {
      this.list.completeAt = null;
      this.list.complete = false;
    }

    this._wishesService.saveStorage();
  }

  remove(itemId: number) {
    this.list.items.splice(itemId, 1);

    this._wishesService.saveStorage();
  }
}
