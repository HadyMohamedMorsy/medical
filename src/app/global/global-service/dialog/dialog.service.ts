import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  displaySubject = new BehaviorSubject<boolean>(false);

  setDisplay(value: boolean) {
    this.displaySubject.next(value);
    console.log(value);

  }

  getDisplay() : Observable<boolean>{
    return this.displaySubject.asObservable();
  }
}
