import { Injectable, inject } from '@angular/core';
import { map, switchMap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { PageRequestService } from '@services/pageRequest/page-request.service';
import { environment } from '../../../../environments/environment';

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

  updatePatient(id : number , updatedData : any){
    return this.http.post<any>(`${environment.apiUrl}updatePatient/${id}` , updatedData)
  }

  deletePatient(id : any){
    return this.http.post<any>(`${environment.apiUrl}softDeletePatient` , id)
  }

  getPatient(id : number){
    return this.http.get<any>(`${environment.apiUrl}patient/${id}`);
  }


}
