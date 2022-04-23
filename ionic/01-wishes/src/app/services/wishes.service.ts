import { List } from './../models/list.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List[] = [];

  constructor() {
    this.loadStorage();
  }

  createList(title: string) {
    const newList = new List(title);
    this.lists.push(newList);
    this.saveStorage();

    return newList.id;
  }

  getList(id: string | number): List {
    id = Number(id);
    return this.lists.find(dataList => dataList.id === id);
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadStorage() {
    if (JSON.parse(localStorage.getItem('data'))) {
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
  }

  removeList(list: List) {
    this.lists = this.lists.filter(dataList => dataList.id !== list.id);

    this.saveStorage();
  }

}
