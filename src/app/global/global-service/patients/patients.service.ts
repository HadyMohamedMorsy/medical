import { environment } from './../../../../environment/environments';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private http = inject(HttpClient);

  getPatients() {
    return this.http.get<any>('../../../../assets/data-table/medical.json').
    pipe(
      map((data) => data.data)
    );
  }

  createPatients(Patients : any){
    return this.http.post<any>(`${environment.apiUrl}createPatient` , Patients)
  }
}
