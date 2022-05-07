import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: [],
})
export class DoughnutChartComponent {
  // Doughnut
  public doughnutChartLabels: string[] = ['Laravel', 'Angular', 'Spring'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] },
      { data: [50, 150, 120] },
      { data: [250, 130, 70] },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public random() {
    this.doughnutChartData = {
      datasets: [
        {
          data: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
        },
        {
          data: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
        },
        {
          data: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
        },
      ],
    };
  }
}
