import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import {getLocaleId, registerLocaleData} from '@angular/common';
import localesEsAR from '@angular/common/locales/es-AR';
import localesFr from '@angular/common/locales/fr';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { PasswordPipe } from './pipes/password.pipe';

registerLocaleData(localesEsAR, 'es-AR');
registerLocaleData(localesFr, 'fr-FR');

@NgModule({
  declarations: [
    AppComponent,
    DomSeguroPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule,
    TableModule,
    ButtonModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
