import { environment } from './../../../../environment/environments';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs';
import { PageRequestService } from '@services/pageRequest/page-request.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private http = inject(HttpClient);
  private PageRequestService = inject(PageRequestService);
  getPatients() {
    return this.PageRequestService.getPageRequest$.pipe(
      switchMap(page =>{
        return this.http.get<any>(`${environment.apiUrl}patients?page=${page}`);
      })
    )
  }

  createPatients(Patients : any){
    return this.http.post<any>(`${environment.apiUrl}createPatient` , Patients)
  }

  deletePatient(id : any){
    return this.http.post<any>(`${environment.apiUrl}softDeletePatient` , id)
  }


}
