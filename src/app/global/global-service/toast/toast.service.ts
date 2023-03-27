import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import {globalModal} from '@modal/global-toast'
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private _message$ = new BehaviorSubject<any>(null);

  get message$(){
    return this._message$.asObservable();
  }

  setMessage(message: any) {
    this._message$.next(message);
  }

  clearMessage() {
    this._message$.next(null);
  }
}
