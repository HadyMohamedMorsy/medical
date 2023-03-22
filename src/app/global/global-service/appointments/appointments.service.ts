import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private http = inject(HttpClient);

  getAppointments() {
    return this.http.get<any>('../../../../assets/data-table/medical.json').
    pipe(
      map((data) => data.data)
    );
  }
}
