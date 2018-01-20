import { Component, Input } from '@angular/core';
import { WeatherInfo, Forecast } from './weather-info';

@Component({
  selector: 'weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent {
  @Input() weatherInfo: WeatherInfo;

  asDate(seconds: number): string {    
    return new Date(seconds * 1000).toLocaleString();
  }
}