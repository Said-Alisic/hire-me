import { Component } from '@angular/core';
import { User } from '@sign-up-app/api-interfaces';

// Services
import { UsersService } from '../users/users.service';

@Component({
  selector: 'sign-up-app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  constructor(private readonly usersService: UsersService) { }


  handleSubmitForm(user: User) {
    console.log('User added');
    
    this.usersService.addUser(user).subscribe();
  }

}
