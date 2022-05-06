import { Component } from '@angular/core';
import { Chart } from './interfaces/charts.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  charts: Chart[] = [
    { id: 1, type: 'line' },
    { id: 2, type: 'bar' }
  ];
}
