import { Injectable, inject } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AppointmentsService } from '@services/appointments/appointments.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverResolver implements Resolve<boolean> {
  private AppointmentsService = inject(AppointmentsService)
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const id = route.paramMap.get('id');
    return this.AppointmentsService.profileAppointment(id);
  }
}
