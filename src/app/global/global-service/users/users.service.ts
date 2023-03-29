import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PageRequestService } from '@services/pageRequest/page-request.service';
import { switchMap } from 'rxjs';
import { environment } from 'src/environment/environments';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);
  private PageRequestService = inject(PageRequestService);

  getUsers() {
    return this.PageRequestService.getPageRequest$.pipe(
      switchMap(page =>{
        return this.http.get<any>(`${environment.apiUrl}users?page=${page}`);
      })
    )
  }
}
