import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map , switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http : HttpClient) { }

  getWeatherForecast(){
    return new Observable((observer)=>{
     window.navigator.geolocation.getCurrentPosition((position)=>{
        observer.next(position)},
        (error)=>{
          observer.next(error)
        }
      )
    }).pipe(
      map((value:any)=>{
        return new HttpParams()
          .set('lon', value.coords.longitude)
          .set('lat', value.coords.latitude)
          .set('units', 'imperial')
          .set('appid', '3f38a7ee9e54c19358d9ae2ccc78349a')
      }),
      switchMap((values)=>{
        return this.http.get('https://api.openweathermap.org/data/2.5/forecast', { params: values})
      })
    )
  }
}
