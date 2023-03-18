import {Route } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AppointmentsComponent} from './appointments/appointments.component';

export const ADMIN_ROUTES : Route[] = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'appointments',
    component : AppointmentsComponent
  },
]
