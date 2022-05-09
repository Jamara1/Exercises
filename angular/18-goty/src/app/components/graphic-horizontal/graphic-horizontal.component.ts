import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic-horizontal',
  templateUrl: './graphic-horizontal.component.html',
  styles: [],
})
export class GraphicHorizontalComponent {
  result: any[] = [
    {
      name: 'Game 1',
      value: 20,
    },
    {
      name: 'Game 2',
      value: 25,
    },
    {
      name: 'Game 3',
      value: 30,
    },
  ];

  view: [number, number] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Games';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votes';

  colorScheme = 'nightLights';

  constructor() {}

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
