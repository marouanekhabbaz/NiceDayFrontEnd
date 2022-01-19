import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location:any){  // MIGHT GIVE ERRORS
      return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=3f38a7ee9e54c19358d9ae2ccc78349a'
      );
}
}

// https://api.openweathermap.org/data/2.5/weather?q=london&appid=3f38a7ee9e54c19358d9ae2ccc78349a
