import { UserService } from './../services/user.service';
import { Memory } from './../models/memory';
import { FindweatherComponent } from './../findweather/findweather.component';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { LoginComponent } from '../login/login.component';
import { ForecastService } from '../forecast.service';
import { TodayComponent } from '../today/today.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-efter-login',
  templateUrl: './efter-login.component.html',
  styleUrls: ['./efter-login.component.css']
})
export class EfterLoginComponent implements OnInit {

  constructor(private lg :LoginComponent , private forecastService: ForecastService ,
     private today :TodayComponent   , private userService : UserService , private router: Router) { }

  public user = LoginComponent.theUser;


  weather = this.today.weatherNow;
  ngOnInit(): void {

    this.forecastService.getWeatherForecast().subscribe((data :any) =>{
      this.today.getTodayForecast(data);




      console.log( data.list[0].main.temp,
        data.list[0].main.feels_like,
        data.list[0].main.temp_min,
        data.list[0].main.temp_max,
        data.list[0].main.pressure,
        data.list[0].main.humidity,
        data.list[0].wind.speed, data.city.name , data.city.sunrise,  data.city.sunset ,   data.list[0].weather[0].description)


    this.memory =  new Memory(
      data.list[0].main.temp,
      data.list[0].main.feels_like,
      data.list[0].main.temp_min,
      data.list[0].main.temp_max,
      data.list[0].main.pressure,
      data.list[0].main.humidity,
      data.list[0].wind.speed,
       data.city.name,
       data.city.sunrise,
       data.city.sunset,
       data.list[0].weather[0].description
      );



  }
    )}

  memory : any = "";


  addMemory(){
    let mem =  JSON.stringify(this.memory)
    console.log(this.memory, "here");
    console.log(this.user.userId )
    this.userService.addMemoryToUser(mem, this.user.userId ).subscribe(data => {
    console.log(  LoginComponent.theUser.memories.push(this.memory))
      this.router.navigate(['/favorites'])
    })



  }

  setUser(user : any){
    this.user = user
  }

}
