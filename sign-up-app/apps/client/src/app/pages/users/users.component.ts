import { Component, OnInit } from '@angular/core';
import { User, Users } from '@sign-up-app/api-interfaces';
import { UsersService } from './users.service';

@Component({
  selector: 'sign-up-app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  
  // Class attributes
  users: Users;
  
  constructor(private readonly usersService: UsersService) {}

  // Functions similarly to React useEffect...
  ngOnInit() {
    this.getAllUsers()

  }

  // Service method calls
  getAllUsers() {
    this.usersService.getAllUsers().subscribe((users) => {
       this.users = users;  
    })
  }

  updateUser(id, user: User) {
    this.usersService.updateUser(id, user).subscribe();
  }

  deleteUser(id) {
    this.usersService.deleteUser(id).subscribe();
  }
    

}
