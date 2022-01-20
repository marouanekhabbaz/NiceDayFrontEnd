
import { Router } from '@angular/router';
import { User } from './../models/user';
import { from, throwError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../services/user.service';
import { ClientMessage } from '../models/client-message';

@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.component.html',
  styleUrls: ['./edit-user-info.component.css']
})
export class EditUserInfoComponent implements OnInit {



  ngOnInit(): void {

    if(! LoginComponent.theUser){
      this.router.navigate(['/'])
    }


  }

  constructor(private lg :LoginComponent  , private userService: UserService ,private  router : Router) { }

  public user = LoginComponent.theUser;

  public clientMessage = new ClientMessage('',0);

   public updateUser( ): void {


    console.log(this.user)

    let userWithoutMemories = this.user;
    userWithoutMemories.memories = null;

    let x =  JSON.stringify(userWithoutMemories);

    console.log(x)

    this.userService.updateUser(x , this.user.userId ).subscribe(data=> {

      console.log(data)
      this.clientMessage.message = 'Successfully updated';
      this.clientMessage.status = true;
      setTimeout(() =>   this.router.navigate(['/logedIn']), 1000);





     },


     error => {this.clientMessage.message = `Something went wrong. please try again`;
     this.clientMessage.status = false;
    }

    )
  }


  signout(){
    LoginComponent.theUser =  new User("","","","","");
    this.router.navigate(['/home'])
  }


}
