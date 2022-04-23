import { AlertController, IonList } from '@ionic/angular';
import { List } from './../../models/list.model';
import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {

  @ViewChild(IonList) list: IonList;
  @Input() terminated: boolean = true;

  constructor(
    private router: Router,
    public _whisesService: WishesService,
    private alertCtrl: AlertController
  ) { }

  listSelected(list: List) {

    if (this.terminated) {
      this.router.navigateByUrl(`tabs/tab2/add/${list.id}`);
    } else {
      this.router.navigateByUrl(`tabs/tab1/add/${list.id}`);
    }

  }

  async edit(list: List) {
    const alert = await this.alertCtrl.create({
      header: 'Edit list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: list.title,
          placeholder: 'List name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.list.closeSlidingItems();
            console.log('Cancel');
          }
        },
        {
          text: 'Edit',
          handler: (data) => {
            if (data.title.length === 0) {
              return;
            }

            list.title = data.title;
            this._whisesService.saveStorage();
            this.list.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }

  remove(list: List) {
    this._whisesService.removeList(list);
  }

}
