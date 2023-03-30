import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environment/environments';
import { Injectable, inject } from '@angular/core';
import {Login , Authentication} from '@modal/login';
import { Data, Router } from '@angular/router';
import { User } from './user-model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

EmitsDataForUser = new BehaviorSubject<null | User>(null);

http = inject(HttpClient);
private  route = inject(Router);
TimerExpirationToken !:any;

  login(Auth : Login){
    return this.http.post<Authentication>(`${environment.apiUrl}auth/login` , Auth)
    .pipe(
      tap((response)=>{
        if(response.result?.token || response.result?.user){
          let dataStamp = (response.result?.token.expires_in as unknown as string)
            const  timestamp = Date.parse(dataStamp) / 1000;
            this.autoLogout(timestamp);
            const user = new User(
              response.result?.user.Full_Name,
              response.result?.user.User_Type,
              response.result?.token.access_token,
              response.result?.token.token_type,
              response.result?.token.expires_in,
            );
            this.EmitsDataForUser.next(user);
            localStorage.setItem('DataUser' , JSON.stringify(user));
        }
      })
    )
  }

  autoLogin(){
      const DataUserStorage : any = JSON.parse(localStorage.getItem('DataUser') as string);
      if(DataUserStorage){
        const CurrentUser = new User(
          DataUserStorage.user,
          DataUserStorage.role,
          DataUserStorage._token,
          DataUserStorage._token_type,
          DataUserStorage._expires_in,
        )
        if(CurrentUser.token != undefined){
          let expiationTime = new Date(DataUserStorage._expires_in).getTime() - new Date().getTime();
          this.autoLogout(expiationTime);
          this.EmitsDataForUser.next(CurrentUser);
        }
      }
  }

  logout(){
    this.EmitsDataForUser.next(null);
    this.route.navigate(['/login']);
    localStorage.removeItem('DataUser');
    if(this.TimerExpirationToken){
      clearTimeout(this.TimerExpirationToken);
    }
    this.TimerExpirationToken = null;
  }

  autoLogout(expiationTimeToken : any){
    const timeOut = expiationTimeToken;
    this.TimerExpirationToken = setTimeout(async ()=>{
      this.logout();
    },(timeOut))
  }

  isAuthenticated(){
    return !!localStorage.getItem('DataUser');
  }
}
