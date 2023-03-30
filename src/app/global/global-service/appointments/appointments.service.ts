import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs';
import { PageRequestService } from '@services/pageRequest/page-request.service';
import { environment } from 'src/environment/environments';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private PageRequestService = inject(PageRequestService);
  private http = inject(HttpClient);

  getAppointments() {
    return this.PageRequestService.getPageRequest$.pipe(
      switchMap(page =>{
        return this.http.get<any>(`${environment.apiUrl}appointments?page=${page}`);
      })
    )
  }

  confirmPatientAppointments(PatientAppointments : any){
    return this.http.post<any>(`${environment.apiUrl}createAppointment` , PatientAppointments)
  }
}
