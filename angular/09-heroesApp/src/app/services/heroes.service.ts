import { delay, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroModel } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url: string = 'https://heroes-app-614cc-default-rtdb.firebaseio.com';

  constructor(private httpClient: HttpClient) { }

  create(hero: HeroModel) {
    return this.httpClient.post(`${this.url}/heroes.json`, hero)
    .pipe(
      map((response: any) => {
        hero.id = response.name;
        return hero;
      })
    );
  }

  update(hero: HeroModel) {
    const heroTemp = {
      ...hero
    };

    delete heroTemp.id;

    return this.httpClient.put(`${this.url}/heroes/${hero.id}.json`, heroTemp);
  }

  createArray(heroesObject: any) {
    const heroes: HeroModel[] = [];

    if (heroesObject === null) {
      return [];
    }

    Object.keys(heroesObject).forEach((key) => {
      const hero: HeroModel = heroesObject[key];
      hero.id = key;

      heroes.push(hero);
    });



    return heroes;
  }

  getHero(id: string | null) {
    return this.httpClient.get(`${this.url}/heroes/${id}.json`);
  }

  getHeroes() {
    return this.httpClient.get(`${this.url}/heroes.json`)
    .pipe(
      map(this.createArray),
      delay(1500)
    );
  }

  delete(id: string | null) {
    return this.httpClient.delete(`${this.url}/heroes/${id}.json`);
  }

}
