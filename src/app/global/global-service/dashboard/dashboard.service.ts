/* `import` is a keyword that is used to import modules. */
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environment/environments';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  http = inject(HttpClient);

  dashboardData(){
    return this.http.get<any>(`${environment.apiUrl}dashboardData`);
  }
}
