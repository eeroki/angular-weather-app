import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WeatherForecastModule } from './weather/weather-forecast.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        WeatherForecastModule
      ]
    }).compileComponents();
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
