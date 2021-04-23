import { Injectable } from '@nestjs/common';
import { Message, User, Users } from '@sign-up-app/api-interfaces';

@Injectable()
export class AppService {

  users: Users = {
    items: [
            {
              firstName: 'New',
              lastName: 'User',
              email: 'newuser@shield.ai',
              password: '1234',
            },
            {
              firstName: 'Old',
              lastName: 'Baws',
              email: 'oldbaws@shield.ai',
              password: '4321',
            }
    ]
    };

  // reference; delete before submission
  getData(): Message {
    return { message: 'Welcome to Shield Sign-Up!' };
  }

  getUser(id: number): User {
    
    return this.users.items[id];
  }

  getUsers(): User[] {

    return this.users.items;
    
  }

  addUser(user: User): number {
    this.users.items.push(user);

    return this.users.items.length;
  }

  updateUser(id: number, user: User): User {
    this.users.items[id] = user;

    return user;
  }

  // Email is used as ID due to pagination handling on client side
  deleteUser(email: string): User {
    let id: number;
    
    // Search for user by email and find the index it matches in our users array
    this.users.items.forEach((user, index) => {
      if(user.email === email) {
        id = index;
      }
    });

    const deletedUser: User = this.users.items[id];
    this.users.items.splice(id, 1);

    return deletedUser;
  }
}
