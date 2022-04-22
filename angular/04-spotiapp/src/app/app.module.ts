import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Import routes */
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

/* Pagination */
/* import { NgxPaginationModule } from 'ngx-pagination'; */

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomSecurityPipe } from './pipes/dom-security.pipe';
import { MyLibraryComponent } from './components/my-library/my-library.component';
import { PlayerComponent } from './components/player/player.component';
import { TimePipe } from './pipes/time.pipe';
import { IntegerPipe } from './pipes/integer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoImagePipe,
    CardsComponent,
    LoadingComponent,
    DomSecurityPipe,
    MyLibraryComponent,
    PlayerComponent,
    TimePipe,
    IntegerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    /* NgxPaginationModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
