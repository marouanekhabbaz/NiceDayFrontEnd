import { ForecastService } from '../forecast.service';
import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  timeline = [];
  weatherNow:any;
  location: any;
  currentTime = new Date();

  classData;

  private params :HttpParams = new HttpParams();

  longitude ;
  latitude ;

  constructor(private forecastService: ForecastService , private http : HttpClient) { }

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

  ngOnInit(): void {
    this.forecastService.getWeatherForecast().subscribe(data=>{
      this.getTodayForecast(data);
    })

    this. getWeatherForecast1().subscribe(data=> console.log(data, "from this line"))
  }

  dateRange(){
    const start = new Date();
    start.setHours(start.getHours()+(start.getTimezoneOffset()/60));
    const to = new Date(start);
    to.setHours(to.getHours() + 2, to.getMinutes() + 59, to.getSeconds() + 59);

    return {start , to}
  }
  getTodayForecast(today:any){
    this.location = today.city;
    for (const forecast of today.list.slice(0, 8)){
      console.log(forecast)
      this.timeline.push({
        time: forecast.dt_txt,
        temp: forecast.main.temp
      });

      const apiDate = new Date(forecast.dt_txt).getTime();

      if (this.dateRange().start.getTime() <= apiDate && this.dateRange().to.getTime() >= apiDate){
        this.weatherNow = forecast;
        console.log(this.weatherNow);
      }
    }
  }

}
