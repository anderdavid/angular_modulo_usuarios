import { Injectable } from '@angular/core';
import {User} from '../models/user'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  endpoint="http://localhost:3000/"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
     };

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error); 
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
    };
  }

  getUsers(): Observable<any> {
    console.log("getUsers()");

    return this.http.get(this.endpoint + 'user').pipe(
    map(this.extractData));
  }

  addUser (User): Observable<any> {
    console.log("addUser (User)");
    console.log(User);

    return this.http.post<any>(this.endpoint + 'user', JSON.stringify(User), this.httpOptions).pipe(
    tap((User) => console.log(`added User w/ id=${User.id}`)),
    catchError(this.handleError<any>('addUser'))
    );
  }

  updateUser (id, User): Observable<any> {
    console.log("updateUser()");
    return this.http.put(this.endpoint + 'usuario/' + id, JSON.stringify(User), this.httpOptions).pipe(
      tap(_ => console.log(`updated User id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser (id): Observable<any> {
    console.log("deleteUser (id)");
    return this.http.delete<any>(this.endpoint + 'usuario/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted User id=${id}`)),
      catchError(this.handleError<any>('deleteUser'))
    );
  }

}
