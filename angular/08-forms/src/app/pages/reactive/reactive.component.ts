import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styles: [
  ]
})
export class ReactiveComponent implements OnInit {

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
