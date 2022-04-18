import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './hero.component.html',
})
export class HeroComponent {

  hero: any = {};
  company: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesServices: HeroesService,
    ) {
    this.activatedRoute.params.subscribe(params => {
      this.hero = this._heroesServices.getHero(params['id']);
      if (this.hero.home === 'Marvel') {
        this.company = 'assets/image/marvel-logo.png';
      } else {
        this.company = 'assets/image/dc-logo.png';
      }
    });
  }

}
