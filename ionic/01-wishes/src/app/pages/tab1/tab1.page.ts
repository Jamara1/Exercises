import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { WishesService } from 'src/app/services/wishes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    public _wishesService: WishesService,
  ) {  }

  navList() {
    this.router.navigateByUrl('tabs/tab1/add');
  }

  async addList() {
    const alert = await this.alertCtrl.create({
      header: 'New list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'List name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        },
        {
          text: 'Create',
          handler: (data) => {
            if (data.title.length === 0) {
              return;
            }

            const listId = this._wishesService.createList(data.title);

            this.router.navigateByUrl(`tabs/add/${listId}`);
          }
        }
      ]
    });

    alert.present();
  }

}
