import { UserService } from './../services/user.service';
import { Memory } from './../models/memory';
import { FindweatherComponent } from './../findweather/findweather.component';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { LoginComponent } from '../login/login.component';
import { ForecastService } from '../forecast.service';
import { TodayComponent } from '../today/today.component';

@Component({
  selector: 'app-efter-login',
  templateUrl: './efter-login.component.html',
  styleUrls: ['./efter-login.component.css']
})
export class EfterLoginComponent implements OnInit {

  constructor(private lg :LoginComponent , private forecastService: ForecastService ,
     private today :TodayComponent   , private userService : UserService) { }

  public user = LoginComponent.theUser;


  weather = this.today.weatherNow;
  ngOnInit(): void {

    this.forecastService.getWeatherForecast().subscribe(data=>{
      this.today.getTodayForecast(data);

    this.memory =  new Memory(
        this.weather.weather.description,
        this.weather.main.temp,
        this.weather.main.feels_like,
        this.weather.main.temp_min,
        this.weather.main.temp_max,
        this.weather.main.pressure,
        this.weather.main.humidity,
       this.weather.wind.speed,
       this.weather.name,
       this.weather.sys.sunrise,
       this.weather.sys.sunset,
      );
  }
    )}

  memory : any = "";

/**

  "sys": {
    "type": 2,
    "id": 2019646,
    "country": "GB",
    "sunrise": 1642665284,
    "sunset": 1642696071
  },
  "timezone": 0,
  "id": 2643743,
  "name": "London",
  "cod": 200
}


 *  date : string;
  description: string;
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
  speed:      number;
  country:    string;
  sunrise:    number;
  sunset:     number;


 * {
  "coord": {
    "lon": -0.1257,
    "lat": 51.5085
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 275.69,
    "feels_like": 272.25,
    "temp_min": 273.28,
    "temp_max": 277.03,
    "pressure": 1031,
    "humidity": 90
  },
  "visibility": 10000,
  "wind": {
    "speed": 3.6,
    "deg": 280
  },
  "clouds": {
    "all": 7
  },
  "dt": 1642640052,
  "sys": {
    "type": 2,
    "id": 2019646,
    "country": "GB",
    "sunrise": 1642665284,
    "sunset": 1642696071
  },
  "timezone": 0,
  "id": 2643743,
  "name": "London",
  "cod": 200
}
 */



  addMemory(){
    let mem =  JSON.stringify(this.memory)
    this.userService.addMemoryToUser(mem, this.user.userId ).subscribe(data => {
      console.log(data)
    })

    console.log("clicked")

  }

  setUser(user : any){
    this.user = user
  }

}
