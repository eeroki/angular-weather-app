import { NgModule } from '@angular/core';
import { WeatherForecastListComponent } from './weather-forecast-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    WeatherForecastListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    WeatherForecastListComponent
  ]
})
export class WeatherForecastModule {}
