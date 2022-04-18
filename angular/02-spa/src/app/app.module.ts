import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Routes */
import { AppRoutingModule } from './app-routing.module';

/* Services */
import { HeroesService } from './services/heroes.service';

/* Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchHeroComponent } from './components/search-hero/search-hero.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    SearchHeroComponent,
    HeroCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
