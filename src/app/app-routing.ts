
import {Route } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ConfirmPasswordComponent } from './auth/confirm-password/confirm-password.component';
import { DashboardComponent } from './medical/dashboard/dashboard.component';
export const routes: Route[] = [
  {
    path : '' ,
    redirectTo:'login',
    pathMatch : 'full',
  },
  {
    path :'login',
    component : LoginComponent
  },
  {
    path :'forget-password',
    component : ForgetPasswordComponent
  },
  {
    path :'confirm-password',
    component : ConfirmPasswordComponent
  },
  {
    path :'clinic',
    component : DashboardComponent,
    children : [
      {
        path : '',
        loadChildren: () => import('./medical/routes-medical').then(mod => mod.ADMIN_ROUTES)
      }
    ]
  },
];

