import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  navigationOptions(item: any) {
    let patch = 'artist';
    let id;

    /* if (item.type === 'artist') {
      id = item.id;
    } else {
      id = item.artists[0].id;
    } */

    if (item.type === 'artist') {
      id = item.id;
    } else if (item.type === 'album') {
      id = item.artists[0].id;
    } else {
      patch = 'player';
      id = item.id;
    }

    this.router.navigate([patch, id]);

  }

}
