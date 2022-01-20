import { Memory } from './../models/memory';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ClientMessage } from '../models/client-message';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

   constructor(private userService: UserService , private router: Router) { }


  //constructor() { }


  title = 'Sign up';

  public clientMessage = new ClientMessage('',0);

  public user = new User("",'','','','');

  public memory = new Memory( 10,19,1,40,10,80, 122,"morocco", 12, 9, "some discription")






  public registerUserFromService( ): void {




    let x =  JSON.stringify(this.user);

    let mem =  JSON.stringify(this.memory);

    console.log(mem)

    this.userService.registerUser(x )
      .subscribe(
        data =>{ this.userService.addMemoryToUser(mem, data)
          .subscribe(data => console.log(data));
       this.clientMessage.message = 'Successfully registered welcome to Nice Day';
       this.clientMessage.status = true;
       setTimeout(() =>   this.router.navigate(['/login']), 1000);


        },


        error => {this.clientMessage.message = `Something went wrong. please try again`;
        this.clientMessage.status = false;

        }
      );

  }


}
