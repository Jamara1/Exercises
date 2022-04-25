import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <div class="container">

      <h2>ngStyle</h2>

      <br>

      <p [style.font-size.px]="size">
        Hello world.. this is a tag
      </p>

      <button class="btn btn-primary me-1" (click)="size = size + 5">
        <i class="fa fa-plus"></i>
      </button>

      <button class="btn btn-primary" (click)="size = size - 5">
        <i class="fa fa-minus"></i>
      </button>

      <hr>

    </div>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  size: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
