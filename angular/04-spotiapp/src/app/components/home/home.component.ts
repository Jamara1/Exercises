import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  countries: any[] = [];

  constructor( private http: HttpClient ) {
    this.http.get('https://restcountries.com/v3.1/lang/spa')
    .subscribe((response: any) => {
      this.countries = response;
    });
  }

  ngOnInit(): void {
  }

}
