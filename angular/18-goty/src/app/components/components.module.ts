import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { GraphicHorizontalComponent } from './graphic-horizontal/graphic-horizontal.component';


@NgModule({
  declarations: [NavbarComponent, GraphicHorizontalComponent],
  imports: [CommonModule, RouterModule, NgxChartsModule, BrowserAnimationsModule],
  exports: [NavbarComponent, GraphicHorizontalComponent],
})
export class ComponentsModule {}
