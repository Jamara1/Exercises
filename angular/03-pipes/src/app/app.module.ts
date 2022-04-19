import { registerLocaleData } from '@angular/common';
import localEn from '@angular/common/locales/en';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { DomSecurityPipe } from './pipes/dom-security.pipe';
import { PasswordPipe } from './pipes/password.pipe';


registerLocaleData(localEn);
registerLocaleData(localEs);
registerLocaleData(localFr);
@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
    DomSecurityPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    /* {
      provide: LOCALE_ID,
      useValue: 'es'
    }, */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
