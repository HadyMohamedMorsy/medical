import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageRequestService {
 private currentPage = new BehaviorSubject(1);

  changePage(page : number){
    this.currentPage.next(page);
  }

  get getPageRequest$(){
    return this.currentPage.asObservable();
  }
}
