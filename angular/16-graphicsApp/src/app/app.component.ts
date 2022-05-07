import { Component } from '@angular/core';
import { Chart } from './interfaces/charts.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  charts: Chart[] = [
    { id: 1, name: 'Line' },
    { id: 2, name: 'Bar' },
    { id: 3, name: 'Doughnut' },
    { id: 4, name: 'Radar' },
    { id: 5, name: 'Pie' },
    { id: 6, name: 'Polar' },
    { id: 7, name: 'Bubble' },
    { id: 8, name: 'Scatter' },
    { id: 9, name: 'Dynamic' },
  ];

  valueOption(select: any) {
    return select.options[select.selectedIndex].value;
  }
}
