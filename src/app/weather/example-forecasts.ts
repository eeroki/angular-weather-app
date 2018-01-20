import { WeatherInfo } from './weather-info';

const date1 = new Date('2018-01-28T18:00:00+0300');
const date2 = new Date('2018-01-28T21:00:00+0300');

export const exampleForecasts: WeatherInfo = {
  city: {
    country: 'FI',
    name: 'Tampere'
  },
  list: [
    {
      dt: date1.getUTCMilliseconds(),
      dt_text: date1.toUTCString(),
      main: {
        humidity: 92,
        pressure: 1002,
        temp: 271.9
      },
      weather: {},
      wind: {}
    },
    {
      dt: date2.getUTCMilliseconds(),
      dt_text: date2.toUTCString(),
      main: {
        humidity: 92,
        pressure: 1001,
        temp: 270.5
      },
      weather: {},
      wind: {}
    }
  ]
};
