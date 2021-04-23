import { Component, OnInit } from '@angular/core';

// Interfaces
import { User, Users } from '@sign-up-app/api-interfaces';

// Services
import { UsersService } from './users.service';

@Component({
  selector: 'sign-up-app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  
  // Class attributes
  users: Users;
  currentPageData: Users;
  
  constructor(private readonly usersService: UsersService) {}

  // Functions similarly to React useEffect...
  ngOnInit() {
    this.getAllUsers();
    

  }

  onCurrentPageDataChange(currentPageData: Users): void {
    this.currentPageData = currentPageData;

  }

  // Service method calls
  getAllUsers() {
    this.usersService.getAllUsers().subscribe((users) => {
       this.users = users;  
    });
  }

  updateUser(id, user: User) {
    this.usersService.updateUser(id, user).subscribe();
  }

  // Email is used as ID due to pagination handling
  deleteUser(email) {
    this.usersService.deleteUser(email).subscribe(() => {
      this.getAllUsers();
    });
  }
    

}
