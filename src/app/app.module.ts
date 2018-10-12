import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,LOCALE_ID} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(es);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-ES' } ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
