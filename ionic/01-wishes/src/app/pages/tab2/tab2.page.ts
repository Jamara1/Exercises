import { List } from './../../models/list.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  lists: List[] = [];

  constructor() { }

  /* ionViewCanEnter() {
    alert('1 - Toc, Toc!!! ¿Puedo pasar? Se lanza antes de que la vista pueda entrar.');
  }

  ionViewDidLoad() {
    alert('2 - En este momento la página ha terminado de cargar.');
  }

  ionViewWillEnter() {
    alert('3 - Acabamos de entrar en la página.');
  }

  /* ionViewDidEnter() {
    alert('4 - Página completamente cargada y activa.');
  }

  ionViewCanLeave() {
    alert('5 - Toc, Toc!!! ¿Puedo salir? Se lanza antes de que la vista pueda salir.');
  }

  ionViewWillLeave() {
    alert('6 - ¿Estás seguro que quieres dejar la página?.');
  }

  ionViewDidLeave() {
    alert('7 - La página Home2 ha dejado de estar activa.');
  }

  ionViewWillUnload() {
    alert('8 - Página y eventos destruidos (Este evento no debería saltar.).');
  } */

}
