import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApixuService } from "./apixu.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EfterLoginComponent } from './efter-login/efter-login.component';
import { EditUserInfoComponent } from './edit-user-info/edit-user-info.component';
import { FindweatherComponent } from './findweather/findweather.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { TodayComponent } from './today/today.component';
import { FutureComponent } from './future/future.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavComponent,
    ErrorComponent,
    EfterLoginComponent,
    EditUserInfoComponent,
    FindweatherComponent,
    FavoritesComponent,
    TodayComponent,
    FutureComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AppComponent, NavComponent, LoginComponent, ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
