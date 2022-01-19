import { Component, OnInit , Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {

  constructor(public appComponent: AppComponent ) { }


  public isLoggedIn = AppComponent.islogedIn


  setLoggedIn(args : boolean){
    this.isLoggedIn =args
  }




}
