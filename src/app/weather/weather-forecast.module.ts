import { NgModule } from '@angular/core';
import { WeatherForecastListComponent } from './weather-forecast-list.component';
import { CommonModule, DatePipe } from '@angular/common';
import { WeatherForecastService } from './weather-forecast.service';

@NgModule({
  declarations: [
    WeatherForecastListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    WeatherForecastService
  ],
  exports: [
    WeatherForecastListComponent
  ]
})
export class WeatherForecastModule {}
