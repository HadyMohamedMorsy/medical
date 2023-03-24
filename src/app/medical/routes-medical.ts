import {Route } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AppointmentsComponent} from './appointments/appointments.component';
import { PatientsComponent } from './patients/patients.component';
import { ProfileComponent } from './profile/profile.component';
import { ConfirmPatientsComponent } from './confirm-patients/confirm-patients.component';
export const ADMIN_ROUTES : Route[] = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'appointments',
    component : AppointmentsComponent
  },
  {
    path : 'patients',
    component : PatientsComponent
  },
  {
    path : ':id/profile',
    component : ProfileComponent
  },
  {
    path : 'Confirm-Patients',
    component : ConfirmPatientsComponent
  },

]
