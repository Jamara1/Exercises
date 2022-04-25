import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styles: [
  ]
})
export class ClassComponent implements OnInit {

  alert: string = "alert-danger";
  loading: boolean = false;

  properties: any = {
    danger: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  execute() {
    this.loading = true;

    setTimeout(() => this.loading = false, 3000);
  }

}
