import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
  ]
})
export class TemplateComponent implements OnInit {

  user: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  save(form: NgForm) {

    if (form.invalid) {

      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });

      return;
    }

    console.log(form.value);
    console.log(this.user);
  }

}

class User {
  firstname: string = 'Johan';
  lastname: string = 'Amara';
  email: string = '7.6amarajohan@gmail.com';
}
