import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '3f38a7ee9e54c19358d9ae2ccc78349a';
  URI: string = '';
  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=imperial&q=`;
  }

  getWeather(cityName: string, countryCode: string) {
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }
}
