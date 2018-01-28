import { NgModule } from '@angular/core';
import { WeatherForecastListComponent } from './weather-forecast-list.component';
import { CommonModule, DatePipe } from '@angular/common';
import { WeatherForecastService } from './weather-forecast.service';
import { KelvinToCelciusPipe } from './kelvin-to-celcius-pipe';

@NgModule({
  declarations: [
    WeatherForecastListComponent,
    KelvinToCelciusPipe
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
