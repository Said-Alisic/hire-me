import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User, Users } from '@sign-up-app/api-interfaces';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // Methods to request API data
  getAllUsers() {
    return this.http.get<Users>('api/users')
            .pipe(map((res: Users) => { 
                return res; 
              }),
              catchError(this.handleError)
            );
  }

  getUser(id) {
    return this.http.get<User>(`api/users/${id}`)
            .pipe(map((res: User) => { 
                return res; 
              }),
              catchError(this.handleError)
            )
  }

  addUser(user: User) {
    return this.http.post('api/users', user)
            .pipe(catchError(this.handleError));
  }

  updateUser(id, user: User) {
    return this.http.put(`api/users/${id}`, user)
            .pipe(catchError(this.handleError));
  }

  deleteUser(id) {
    return this.http.delete(`api/users/${id}`);
  }

  // The HttpClient will emit an error of type HttpErrorResponse
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError("Data error occurred, please try again");
  }


}
