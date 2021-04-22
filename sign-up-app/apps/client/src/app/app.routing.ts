import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { UsersComponent } from './pages/users/users.component';

// Next to finish
const appRoutes: Routes = [
    { 
        path: 'sign-up', 
        component: SignupComponent
    },
    { 
        path: 'users', 
        component: UsersComponent
    },
]