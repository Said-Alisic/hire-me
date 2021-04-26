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
  exists: boolean;

  constructor(private readonly usersService: UsersService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  handleSubmitForm(user: User) {
    for (const key in this.signUpForm.controls) {
      this.signUpForm.controls[key].markAsDirty();
      this.signUpForm.controls[key].updateValueAndValidity();
    }

    if(this.signUpForm.valid) {
      this.usersService.addUser(user).subscribe(
        () => {
            this.router.navigate(['/success'], { state: user });
        },
        (err) => {
          this.exists = true;
          console.log(err);
          
        });
    } 
  }

}
