import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot , Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  private AuthService = inject(AuthService);
  private routing = inject(Router);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.AuthService.isAuthenticated()){
        return true;
      }else{
        return this.routing.createUrlTree(['/clinic']);
      }
  }

}
