import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
})
export class SearchHeroComponent implements OnInit {
  text: string = '';
  heroes: any[] = [];
  @Input() index: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _heroesService: HeroesService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.text = params['text'];
      this.heroes = this._heroesService.searchHeroes(params['text']);
    });
  }

  seeHero(index: number) {
    this.router.navigate(['heroe', index]);
  }
}
