import { User } from './../models/user';
import { throwError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.component.html',
  styleUrls: ['./edit-user-info.component.css']
})
export class EditUserInfoComponent implements OnInit {



  ngOnInit(): void {
  }

  constructor(private lg :LoginComponent  , private userService: UserService) { }

  public user = LoginComponent.theUser;


   public updateUser( ): void {


    console.log(this.user)

    let userWithoutMemories = this.user;
    userWithoutMemories.memories = null;

    let x =  JSON.stringify(userWithoutMemories);

    console.log(x)

    this.userService.updateUser(x , this.user.userId ).subscribe(data=> console.log(data))


  }



}
