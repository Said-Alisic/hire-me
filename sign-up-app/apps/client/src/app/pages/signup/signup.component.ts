import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@sign-up-app/api-interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { UsersService } from '../users/users.service';

@Component({
  selector: 'sign-up-app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  // apiError: boolean = false;     // TO-DO: implement error handling for Routing when form is invalid

  constructor(private readonly usersService: UsersService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    // [ Validators.required, Validators.pattern('^[a-zA-Z]+$')]
    
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  handleSubmitForm(user: User) {
    for (const key in this.signUpForm.controls) {
      this.signUpForm.controls[key].markAsDirty();
      this.signUpForm.controls[key].updateValueAndValidity();
    }
    if(this.signUpForm.valid) {
      
      this.usersService.addUser(user).subscribe(() => {
        this.router.navigate(['/success']);
      });
    } 
  }

}
