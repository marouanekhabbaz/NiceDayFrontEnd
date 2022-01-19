import { User } from './models/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nice-day-frontend';
  public  static islogedIn : boolean = false;
   public user : User = new User("","","","","")




}
