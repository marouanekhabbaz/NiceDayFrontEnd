import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';


const url =   `http://ec2-18-206-252-36.compute-1.amazonaws.com:5000/users`;


/**\
 *  fetch(this.url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },

      referrerPolicy: 'no-referrer',
      body: JSON.stringify(this.user)
    }).then(response => response.json())
    .then(data => console.log(data));
 */

@Injectable({
  providedIn: 'root'
})



export class UserService {

  constructor(private http: HttpClient) { }
   location : any ;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {

      console.error('An error occurred:', httpError.error.message);
    } else {

      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  public getlocation(){
    https://ipapi.co/json/
    //latitude: 40.7182
    // longitude: -74.0476
    this.http.get("https://ipapi.co/json/").subscribe(
      data=>{ console.log('from my function');
      console.log(data)  ;
      this.location = data;
      // window.latitude =this.location.latitude;

    },
      err => {console.log("from my function") ; console.log(err)}
    )
  }

  public registerUser(user: string): Observable<number> {

    return this.http.post<number>(`${url}/add`, user, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  getWithEmailAndPswUser(user :string) : Observable<User> {
    console.log('login...')
   return this.http.post<User>(`${url}/find`, user, this.httpOptions).pipe( catchError(this.handleError))
  }



 updateUser(user :string, id :number) : Observable<User> {
    console.log('login...')
   return this.http.put<User>(`${url}/${id}`, user, this.httpOptions).pipe( catchError(this.handleError))
  }




  addMemoryToUser(memory :string, id :number) : Observable<number> {

   return this.http.post<number>(`${url}/${id}/addmemory`, memory, this.httpOptions).pipe( catchError(this.handleError))


  }




/**
 * findUserById(id : number): Observable<User>{

  return this.http.get<User>(`${url}/${id}`)
  .pipe(
    catchError(this.handleError)
  )

}
 */

}
