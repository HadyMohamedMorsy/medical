import { BehaviorSubject, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environment/environments';
import { Injectable, inject } from '@angular/core';
import {Login , Authentication} from '@modal/login';
import { Data, Router } from '@angular/router';
import { User } from './user-model';
import { UserForget } from './forget_password-model';
import { ToastService } from '@services/toast/toast.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  EmitsDataForUser = new BehaviorSubject<null | User>(null);
  Forget = new BehaviorSubject<any>(null);
  private ToastService = inject(ToastService);

http = inject(HttpClient);
private  route = inject(Router);
TimerExpirationToken !:any;
TimerExpirationExpire !:any;

  login(Auth : Login){
    return this.http.post<Authentication>(`${environment.apiUrl}auth/login` , Auth)
    .pipe(
      tap((response)=>{
        if(response.result?.token || response.result?.user){
          let dataStamp = (response.result?.token.expires_in as unknown as string)
            this.convertTime(dataStamp , 'login')
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
      const DataUserStorage  = JSON.parse(localStorage.getItem('DataUser') as string);
      if(DataUserStorage){
        const CurrentUser = new User(
          DataUserStorage.user,
          DataUserStorage.role,
          DataUserStorage._token,
          DataUserStorage._token_type,
          DataUserStorage._expires_in,
        )
        if(CurrentUser.token != undefined){
          let expiationTime = (DataUserStorage._expires_in as unknown as string)
          this.convertTime(expiationTime , 'login')
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

  forgetPassword(National_id : number){
    return this.http.post<any>(`${environment.apiUrl}checkNationalId` , National_id).pipe(
      map((res : any) => {
        if(res.result.user){
          const id = res.result.user[0].id
          const expire_in = res.result.expire_in;
          return {
            id : id,
            expire_in : expire_in,
            message : "Success, Retrieve Data & u have limit 3 min to change password",
            status  : 200
          }
        }
        return {
          message : "there something wrong with your NationalId",
          status  : 404
        }
      }),
      tap(res =>{
        if(res.status == 404){
          this.ToastService.setMessage(res);
        }else{
          let dataStamp = (res.expire_in as unknown as string)
          this.convertTime(dataStamp , 'forget');
          const cardinalUser = new UserForget(
            res.id,
            res.expire_in
          )
          this.Forget.next(cardinalUser);
          this.ToastService.setMessage(res);
          localStorage.setItem('cardinalUser' , JSON.stringify(cardinalUser));
        }
      })
    )
  }

  autoForgetPassword(){
    const DataStoragePassword  = JSON.parse(localStorage.getItem('cardinalUser') as string);
    if(DataStoragePassword){
      const CurrentUser = new UserForget(
        DataStoragePassword.id,
        DataStoragePassword.expire_in,
      )
      if(CurrentUser.expire != undefined){
        let expiationTime = (DataStoragePassword.expire_in as string);
        this.convertTime(expiationTime , 'forget');
        this.Forget.next(CurrentUser);
      }
    }
  }

  expireOut(){
    this.Forget.next(null);
    this.route.navigate(['/login']);
    localStorage.removeItem('cardinalUser');
    if(this.TimerExpirationExpire){
      clearTimeout(this.TimerExpirationExpire);
    }
    this.TimerExpirationExpire = null;
  }

  autoConfirmPage(TimerExpirationExpire : any){
    this.TimerExpirationToken = setTimeout(async ()=>{
      this.expireOut();
    },(TimerExpirationExpire))
  }

  confirmPasswordRequest(confirm : any) {
    return this.http.post<Authentication>(`${environment.apiUrl}changePassword` , confirm)
  }

  private convertTime(dataStamp : any , checkAuth : string){
      const expirationTime = new Date(dataStamp).getTime();
      const now = new Date();
      // Get the components of the current time
      const year = now.getFullYear();
      const month = ('0' + (now.getMonth() + 1)).slice(-2);
      const day = ('0' + now.getDate()).slice(-2);
      let hours = now.getHours();
      const minutes = ('0' + now.getMinutes()).slice(-2);
      const seconds = ('0' + now.getSeconds()).slice(-2);
      hours = hours % 12;
      hours = hours ? hours : 12;
      const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      const secondsRemaining = Math.floor((expirationTime - new Date(formattedTime).getTime()) / 1000);
      checkAuth == 'login' ?  this.autoLogout(secondsRemaining * 1000) : this.autoConfirmPage(secondsRemaining * 1000)
  }

  isAuthenticatedForget(){
    return !!localStorage.getItem('cardinalUser');
  }


}
