import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private displaySubject = new BehaviorSubject<boolean>(false);

  setDisplay(value: boolean) {
    this.displaySubject.next(value);
  }

  getDisplay() : Observable<boolean>{
    return this.displaySubject.asObservable();
  }
}
