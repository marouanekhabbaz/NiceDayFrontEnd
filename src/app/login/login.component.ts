import { NavComponent } from './../nav/nav.component';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { ClientMessage } from '../models/client-message';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private userService: UserService  , private router: Router) { }

  title = 'Login';

  public clientMessage = new ClientMessage('',0);



  public user = new User("",'','','','');
  public static theUser : any;

  public login( ): void {


    console.log("clicked ================")

    let x =  JSON.stringify(this.user);

    console.log(x)

    this.userService.getWithEmailAndPswUser(x)
    .subscribe(data=>{
       this.user =data ;
        AppComponent.islogedIn =true ;
        LoginComponent.theUser = data;
        this.clientMessage.message = 'Successfully login';
        this.clientMessage.status = true;
        this.router.navigate(['/logedIn']);

        } ,
        error => {this.clientMessage.message = `password and email doesn't match`;
        this.clientMessage.status = false;

        }
        )

  }



}
