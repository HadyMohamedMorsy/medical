
import {Route } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ConfirmPasswordComponent } from './auth/confirm-password/confirm-password.component';
import { DashboardComponent } from './medical/dashboard/dashboard.component';
import { AuthGuardGuard } from '@core/guards/auth-guard.guard';
import { LoginGuardGuard } from '@core/guards/login-guard.guard';
import { ForgetGuard } from '@core/guards/forget.guard';
import { ConfirmGuard } from '@core/guards/confirm.guard';

export const routes: Route[] = [
  {
    path : '' ,
    redirectTo:'login',
    pathMatch : 'full',
  },
  {
    path :'login',
    canActivate : [LoginGuardGuard],
    component : LoginComponent
  },
  {
    path :'forget-password',
    canActivate : [LoginGuardGuard , ForgetGuard],
    component : ForgetPasswordComponent
  },
  {
    path :'confirm-password',
    canActivate : [LoginGuardGuard , ConfirmGuard],
    component : ConfirmPasswordComponent
  },
  {
    path :'clinic',
    component : DashboardComponent,
    canActivate : [AuthGuardGuard],
    children : [
      {
        path : '',
        loadChildren: () => import('./medical/routes-medical').then(mod => mod.ADMIN_ROUTES)
      }
    ]
  },
];

