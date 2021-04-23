import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { UsersComponent } from './pages/users/users.component';
import { SuccessComponent } from './pages/success/success.component';
import { ErrorComponent } from './pages/error/error.component';


const appRoutes: Routes = [
    { 
        path: '', 
        component: SignupComponent,
        children: [
            {
                path: 'sign-up', 
                component: SignupComponent,
            }
        ]
    },
    { 
        path: 'users', 
        component: UsersComponent,
    },
    { 
        path: 'success', 
        component: SuccessComponent,
    },
    { 
        path: '**', 
        component: ErrorComponent,
    },
];

// Setting up a router
export const routing = RouterModule.forRoot(appRoutes);
