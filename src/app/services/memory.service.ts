import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  constructor(private http: HttpClient) { }


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


}
