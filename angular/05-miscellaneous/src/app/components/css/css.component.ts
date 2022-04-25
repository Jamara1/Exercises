import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
  <div class="container mt-3">

    <h2>CSS in typescript</h2>

    <hr>
  </div>
  `,
  styles: [`
    h2 {
      color: red;
      font-size: 35px;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
