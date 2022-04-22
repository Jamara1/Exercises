import { ListItem } from './list-item.model';

export class List {

  id: number;
  title: string;
  createdAt: Date;
  completeAt: Date;
  complete: boolean;
  item: ListItem[];

  constructor(title: string) {
    this.title = title;

    this.createdAt = new Date();
    this.complete = false;
    this.item = [];

    this.id = new Date().getTime();
  }
}
