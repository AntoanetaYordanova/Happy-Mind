import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../guards/auth.activate';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children : [
      {
        path : 'register',
        component : RegisterComponent,
        canActivate: [AuthActivate],
        data: {
            authenticationRequired: false,
            authenticationFailureRedirect: '/home',
            title: 'Register'
        }
      },
      {
        path : 'login',
        component : LoginComponent,
        canActivate: [AuthActivate],
        data: {
            authenticationRequired: false,
            authenticationFailureRedirect: '/home',
            title: 'Login',
            isLogin: true,
        }
      },
      {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthActivate],
        data: {
            authenticationRequired: true,
            authenticationFailureRedirect: '/user/login'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthActivate],
        data: {
            authenticationRequired: true,
            authenticationFailureRedirect: '/user/login',
            title: 'Profile'
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

