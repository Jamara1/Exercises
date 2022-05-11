import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-graphic-horizontal',
  templateUrl: './graphic-horizontal.component.html',
  styles: [],
})
export class GraphicHorizontalComponent implements OnDestroy{
  results: any[] = [
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
      value: 15,
    },
    {
      name: 'Game 4',
      value: 30,
    },
  ];

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

  interval: any;

  constructor() {

    this.interval = setInterval(() => {
      console.log('Tick');

      const newResults = [...this.results];

      newResults.forEach(result => {
        result.value = Math.round(Math.random() * 500);
      });

      this.results = [...newResults];
    }, 1500);
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
