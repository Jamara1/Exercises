import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
  ]
})
export class TemplateComponent implements OnInit {

  firstname: string = '';
  lastname: string = '';
  email: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    console.log(form.value);
  }

}
