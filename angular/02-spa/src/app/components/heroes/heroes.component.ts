import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private _heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  seeHero(index: number) {
    this.router.navigate(['heroe', index]);
  }
}
