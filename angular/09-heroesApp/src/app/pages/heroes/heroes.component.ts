import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { HeroModel } from 'src/app/models/hero.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: HeroModel[] = [];
  loading: boolean = false;

  constructor(private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.loading = true;
    this._heroesService.getHeroes()
      .subscribe(response => {
        this.heroes = response;
        this.loading = false;
      });
  }

  deleteHero(hero: HeroModel | any, index: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: `Are you sure you want to delete ${hero.name}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(response => {
      if (response.value) {
        this._heroesService.delete(hero.id).subscribe(() => {
          this.heroes.splice(index, 1);
        });
      }
    });


  }
}
