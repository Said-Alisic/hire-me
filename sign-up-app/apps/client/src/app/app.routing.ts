import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { UsersComponent } from './pages/users/users.component';


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
        component: UsersComponent
    },
    { 
        path: 'success', 
        // Add success component
    },
    { 
        path: 'error', 
        // Add error component
    },
];

// Setting up a router
export const routing = RouterModule.forRoot(appRoutes);
