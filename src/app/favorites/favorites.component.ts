import { Memory } from './../models/memory';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private lg :LoginComponent , private router: Router) { }

  public user = LoginComponent.theUser;

  public memories   ;



  ngOnInit(): void {


    if(! LoginComponent.theUser){
      this.router.navigate(['/'])
    }
    this.memories = this.user.memories;

    this.memories.forEach(element => {
      console.log("==========")
      console.log(element)
      console.log("==========")
    });
  }




  signout(){
    LoginComponent.theUser =  new User("","","","","");
    this.router.navigate(['/home'])
  }

}
