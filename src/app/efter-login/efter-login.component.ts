import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-efter-login',
  templateUrl: './efter-login.component.html',
  styleUrls: ['./efter-login.component.css']
})
export class EfterLoginComponent implements OnInit {

  constructor(private lg :LoginComponent ) { }

  public user = LoginComponent.theUser;



  ngOnInit(): void {


  }

  setUser(user : any){
    this.user = user
  }

}
