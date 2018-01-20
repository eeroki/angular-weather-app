import { WeatherInfo } from './weather/weather-info';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { exampleForecasts } from './weather/example-forecasts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Weather app';
  weatherInfo: Observable<WeatherInfo>;

  ngOnInit(): void {
    this.weatherInfo = Observable.of(exampleForecasts);
  }
}
