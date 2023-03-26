import {AppointmentsComponent} from './appointments/appointments.component';
import { ConfirmPatientsComponent } from './confirm-patients/confirm-patients.component';
import {HomeComponent} from './home/home.component';
import { InsideClinicComponent } from './inside-clinic/inside-clinic.component';
import { PatientsComponent } from './patients/patients.component';
import { ProfileComponent } from './profile/profile.component';
import {Route} from '@angular/router';
import { UsersComponent } from './users/users.component';
import { WithDoctorComponent } from './with-doctor/with-doctor.component';

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
    path : 'users',
    component : UsersComponent
  },
  {
    path : 'profile',
    component : ProfileComponent
  },
  {
    path : 'Confirm-Patients',
    component : ConfirmPatientsComponent
  },
  {
    path : 'inside-clinic',
    component : InsideClinicComponent
  },
  {
    path : 'with-doctor',
    component : WithDoctorComponent
  },

]
