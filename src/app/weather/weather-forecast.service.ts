import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { WeatherInfo } from './weather-info';
import { FORECAST_API_KEY } from "../../forecast-api-key";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${FORECAST_API_KEY}`;

@Injectable()
export class WeatherForecastService {
  constructor(private http: HttpClient) {}

  search(term: string): Observable<WeatherInfo> {
    const url = `${ROOT_URL}&q=${term},FI`;    

    return this.http.get(url)
      .catch(err => {
        console.error(err);
        return Observable.of(undefined);
      });
  }
}