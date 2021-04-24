import { Injectable } from '@nestjs/common';
import { User, Users } from '@sign-up-app/api-interfaces';

@Injectable()
export class AppService {

  users: Users = {
    items: [
      {   
        firstName: 'New', 
        lastName: 'User', 
        email: 'newuser@shieldapp.ai',            
      },
      {
        firstName: 'Erlich',
        lastName: 'Bachman',
        email: 'erlich@shieldapp.ai',
      },
      {
        firstName: 'Richard',
        lastName: 'Hendricks',
        email: 'richard@shieldapp.ai',
      },
      {
        firstName: 'Jared',
        lastName: 'Dunn',
        email: 'jared@shieldapp.ai',
      },
      {
        firstName: 'Laurie',
        lastName: 'Bream',
        email: 'laurie@shieldapp.ai',
      },
    ]
    };

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

}
