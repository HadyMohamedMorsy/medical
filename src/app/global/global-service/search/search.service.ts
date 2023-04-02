import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { PageRequestService } from '@services/pageRequest/page-request.service';
import { environment } from 'src/environment/environments';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private http = inject(HttpClient);
  private PageRequestService = inject(PageRequestService);

  // Appointment 

  searchQuery(tableName: string , searchContent: string | number){
    return this.PageRequestService.getPageRequest$.pipe(
      switchMap(page =>{
        const Dataquery = {
          search : searchContent,
          table : tableName
        }
        return this.http.post<any>(`${environment.apiUrl}search?page=${page}` , Dataquery)
      })
    )

  }
}
