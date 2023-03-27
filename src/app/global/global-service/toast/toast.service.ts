import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import {Authentication} from '@modal/login';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private _message$ = new BehaviorSubject<Authentication | null>(null);

  get message$(){
    return this._message$.asObservable();
  }

  setMessage(message: Authentication) {
    this._message$.next(message);
  }

  clearMessage() {
    this._message$.next(null);
  }
}
