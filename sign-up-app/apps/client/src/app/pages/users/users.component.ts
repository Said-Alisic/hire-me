import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@sign-up-app/api-interfaces';

@Component({
  selector: 'sign-up-app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users$ = this.http.get<Array<User>>('/api/users');
  constructor(private http: HttpClient) { }


}
