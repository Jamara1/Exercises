import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDhBrrwm15WzzLQyVktFgjeBpBJWHhoqt0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
