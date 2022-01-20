import { Memory } from './../models/memory';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private lg :LoginComponent) { }

  public user = LoginComponent.theUser;

  public memories = this.user.memories ;



  ngOnInit(): void {
    this.memories.forEach(element => {
      console.log("==========")
      console.log(element)
      console.log("==========")
    });
  }



}
