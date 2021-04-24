import { Component, OnInit } from '@angular/core';

// Interfaces
import { Users } from '@sign-up-app/api-interfaces';

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

}
