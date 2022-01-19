import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  location = { cityName: '', countryCode: '' };
  weather = undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather(this.location.cityName, this.location.countryCode);
  }

  getWeather(cityName: string, countryCode: string) {
    this.weatherService
      .getWeather(cityName, countryCode)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    if (cityName.value && countryCode.value) {
      this.getWeather(cityName.value, countryCode.value);

      cityName.value = '';
      countryCode.value = '';
    } else {
      alert('Please Insert some values');
    }
    cityName.focus();
    return false;
  }

}
