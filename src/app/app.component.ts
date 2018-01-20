import { WeatherInfo } from './weather/weather-info';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { exampleForecasts } from './weather/example-forecasts';
import { FormGroup, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Weather app';
  weatherInfo: Observable<WeatherInfo>;
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = fb.group({
      term: [undefined]
    });
  }

  ngOnInit(): void {
    this.weatherInfo = this.searchForm.get('term').valueChanges
    .debounceTime(300)
    .switchMap(term => Observable.of(exampleForecasts));
  }
}
