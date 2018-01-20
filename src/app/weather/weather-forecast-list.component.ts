import { Component, Input } from '@angular/core';
import { WeatherInfo } from './weather-info';

@Component({
  selector: 'weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent {
  @Input() weatherInfo: WeatherInfo;
}