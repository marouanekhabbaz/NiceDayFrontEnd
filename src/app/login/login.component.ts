import { NavComponent } from './../nav/nav.component';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private userService: UserService  , private router: Router) { }

  title = 'Login';



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
        this.router.navigate(['/logedIn']);

        })

  }



}
