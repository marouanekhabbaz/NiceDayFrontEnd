import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map , switchMap } from 'rxjs/operators';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForecastService implements OnInit {



  constructor(private http : HttpClient  ) { }
  classData;

  private params :HttpParams = new HttpParams();

  longitude ;
  latitude ;

  ngOnInit(){

    console.log('from my code =======================================================================')
    this.getlocation();
    this.getApicall();
    console.log('from my code =======================================================================')

  }

  public getlocation(){
    https://ipapi.co/json/
    //latitude: 40.7182
    // longitude: -74.0476
    this.http.get("https://ipapi.co/json/").subscribe(
      data=>{ console.log('from my function');
      console.log(data)  ;
      this.classData = data;
      this.latitude = this.classData.latitude;
      this.longitude = this.classData.longitude;

    },
      err => {console.log("from my function") ; console.log(err)}
    )


  }

  getApicall(){
    this.params.set('lon', this.longitude)
    .set('lat', this.latitude)
    .set('units', 'imperial')
    .set('appid', '3f38a7ee9e54c19358d9ae2ccc78349a')
  }

  getWeatherForecast1(){

    this.http.get("https://ipapi.co/json/")    .subscribe(
      data=>{ console.log('from my function');
      console.log(data)  ;
      this.classData = data;
      this.latitude = this.classData.latitude;
      this.longitude = this.classData.longitude;

    },
      err => {console.log("from my function") ; console.log(err)}
    );

    this.params.set('lon', this.longitude)
    .set('lat', this.latitude)
    .set('units', 'imperial')
    .set('appid', '3f38a7ee9e54c19358d9ae2ccc78349a');



    this.params.set('lon', this.longitude)
    .set('lat', this.latitude)
    .set('units', 'imperial')
    .set('appid', '3f38a7ee9e54c19358d9ae2ccc78349a')

    return this.http.get('https://api.openweathermap.org/data/2.5/forecast', { params: this.params});

  }
  /*
  using this very important because it get the location
  */

  // https://ipapi.co/json/"

  getWeatherForecast(){
  return  this.http.get("https://ipapi.co/json/").pipe(
      map((value:any)=>{
        return new HttpParams()
          .set('lon', value.longitude)
          .set('lat', value.latitude)
          .set('units', 'imperial')
          .set('appid', '3f38a7ee9e54c19358d9ae2ccc78349a')
      }),
      switchMap((values)=>{
        return this.http.get('https://api.openweathermap.org/data/2.5/forecast', { params: values})
      })
    )
  }





}

  // getWeatherForecast(){
  //   return new Observable((observer)=>{
  //    window.navigator.geolocation.getCurrentPosition((position)=>{
  //       observer.next(position)},
  //       (error)=>{
  //         observer.next(error)
  //       }
  //     )
  //   }).pipe(
  //     map((value:any)=>{
  //       return new HttpParams()
  //         .set('lon', value.coords.longitude)
  //         .set('lat', value.coords.latitude)
  //         .set('units', 'imperial')
  //         .set('appid', '3f38a7ee9e54c19358d9ae2ccc78349a')
  //     }),
  //     switchMap((values)=>{
  //       return this.http.get('https://api.openweathermap.org/data/2.5/forecast', { params: values})
  //     })
  //   )
  // }
//}
