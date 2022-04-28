import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private httpClient: HttpClient) {}

  getCountries() {
    return this.httpClient.get('https://restcountries.com/v2/lang/es').pipe(
      map((response: any) =>
        response.map((countrie: any) => ({ name: countrie.name, code: countrie.alpha3Code,}))
      )
    );
  }
}
