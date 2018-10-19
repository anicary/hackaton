import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,LOCALE_ID} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { RouterModule, Routes } from '@angular/router';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { LedComponent } from './led/led.component';
import { TempComponent } from './temp/temp.component';
registerLocaleData(es);

const appRoutes: Routes = [
  { path: '', component: TempComponent },
  { path: 'led', component: LedComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LedComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-ES' } ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
