import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ConfirmPasswordComponent } from './auth/confirm-password/confirm-password.component';
const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
