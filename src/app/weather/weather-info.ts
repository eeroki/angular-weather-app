export interface WeatherInfo {
  city: City;
  list: Forecast[];
}

export interface City {
  country: string;
  name: string;
}

export interface Forecast {
  dt: number;
  dt_text: string;
  main: {
    humidity?: number;
    pressure?: number;
    temp?: number;
  },
  weather: {
    main?: string,
    description?: string,    
  },
  wind: {
    speed?: number
  }
}
