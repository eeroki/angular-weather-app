import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { WeatherForecastModule } from './weather/weather-forecast.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeFi from '@angular/common/locales/fi';

registerLocaleData(localeFi, 'fi-FI');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    ReactiveFormsModule,
    WeatherForecastModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fi-FI' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
