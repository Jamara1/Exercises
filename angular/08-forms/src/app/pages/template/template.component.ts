import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
  ]
})
export class TemplateComponent implements OnInit {

  user: User = new User();
  countries: any[] = [];

  constructor(private _countriesService: CountriesService) { }

  ngOnInit(): void {
    this._countriesService.getCountries().subscribe(response => {
      this.countries = response;

      this.countries.unshift({
        name: 'Select country...',
        code: ''
      });
    });
  }

  save(form: NgForm) {

    if (form.invalid) {

      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });

      return;
    }

    console.log(this.user);
  }

}

class User {
  firstname: string = 'Johan';
  lastname: string = 'Amara';
  email: string = '7.6amarajohan@gmail.com';
  country: string = 'COL';
  gender: string = 'M';
}
