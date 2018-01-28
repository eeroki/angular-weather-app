import { Pipe, PipeTransform } from '@angular/core';

const KELVIN_TO_CELCIUS = -273.15;

@Pipe({name: 'kelvinToCelcius'})
export class KelvinToCelciusPipe implements PipeTransform {
  transform(value: number) {
    return (value + KELVIN_TO_CELCIUS).toFixed(2);
  }
}