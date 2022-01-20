import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";



@Component({
  selector: 'app-findweather',
  templateUrl: './findweather.component.html',
  styleUrls: ['./findweather.component.css']
})
export class FindweatherComponent implements OnInit {

  public weatherSearchForm!: FormGroup; // the ! might give you an error in the future
  public weatherData: any;
  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService

    ) { }

   public static weather : any = "";


  ngOnInit(){
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues){
      this.apixuService
      .getWeather(formValues.location)
      .subscribe(data => {this.weatherData = data; FindweatherComponent.weather = data })
      console.log(this.weatherData);
    }
  }

