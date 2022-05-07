import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgChartsModule } from 'ng2-charts';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { PolarChartComponent } from './components/polar-chart/polar-chart.component';
import { BubbleChartComponent } from './components/bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';
import { DynamicChartComponent } from './components/dynamic-chart/dynamic-chart.component';

@NgModule({
  declarations: [AppComponent, LineChartComponent, BarChartComponent, DoughnutChartComponent, RadarChartComponent, PieChartComponent, PolarChartComponent, BubbleChartComponent, ScatterChartComponent, DynamicChartComponent],
  imports: [
    BrowserModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MarkdownModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
