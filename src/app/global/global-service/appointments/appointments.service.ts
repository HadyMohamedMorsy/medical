import { Injectable, inject } from '@angular/core';
import { map, switchMap } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  pendingStatusForAppointments(){
    return this.PageRequestService.getPageRequest$.pipe(
      switchMap(page =>{
        return this.http.get<any>(`${environment.apiUrl}pendingStatusForAppointments?page=${page}`)
      })
    )
  }

  insideClinicStatusForAppointments(){
    return this.PageRequestService.getPageRequest$.pipe(
      switchMap(page =>{
        return this.http.get<any>(`${environment.apiUrl}insideClinicStatusForAppointments?page=${page}`)
      })
    )
  }
  withDoctorStatusForAppointments(){
    return this.PageRequestService.getPageRequest$.pipe(
      switchMap(page =>{
        return this.http.get<any>(`${environment.apiUrl}withDoctorStatusForAppointments?page=${page}`)
      })
    )
  }

  confirmPatientAppointments(PatientAppointments : any){
    return this.http.post<any>(`${environment.apiUrl}createAppointment` , PatientAppointments)
  }

  changeStatusAppointment(reservationStatus : string){
    return this.http.post<any>(`${environment.apiUrl}changeStatusAppointment` , reservationStatus)
  }


  profileAppointment(id : any){
    return this.PageRequestService.getPageRequest$.pipe(
      switchMap(page =>{
        return this.http.get<any>(`${environment.apiUrl}appointmentsForUser/${id}?page=${page}`)
      })
    )
  }

  uploadFiles(Files : any){
    const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
    return this.http.post<any>(`${environment.apiUrl}uploadingImages` , Files)

  }

  updateAppointment(updateWithDoctor : any){
    return this.http.post<any>(`${environment.apiUrl}updateAppointment` , updateWithDoctor);
  }
}
