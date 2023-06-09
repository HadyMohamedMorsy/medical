import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { PageRequestService } from '@services/pageRequest/page-request.service';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs';

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
  createUsers(user : any){
    return this.http.post<any>(`${environment.apiUrl}createUser` , user);
  }
  updateUsers(id:number , user : any){
    return this.http.post<any>(`${environment.apiUrl}updateUser/${id}` , user);
  }
  deleteUsers(id : any){
    return this.http.post<any>(`${environment.apiUrl}softDeleteUser` , id)
  }
}
