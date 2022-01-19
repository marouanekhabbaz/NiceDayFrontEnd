import { Memory } from './../models/memory';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

   constructor(private userService: UserService) { }


  //constructor() { }


  title = 'Sign up';

  public user = new User("",'','','','');

  public memory = new Memory( 10,19,1,40,10,80, 122,"morocco", 12, 9, "some discription")

  clientMessage ={message :""};




  public registerUserFromService( ): void {




    let x =  JSON.stringify(this.user);

    let mem =  JSON.stringify(this.memory);


    this.userService.registerUser(x )
      .subscribe(
        data => this.userService.addMemoryToUser(mem, data).subscribe(data => console.log(data)),
        error => this.clientMessage.message = `Something went wrong. Error: ${error}`
      );

  }


}
