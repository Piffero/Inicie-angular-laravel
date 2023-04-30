import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Oauth20Service } from '../services/auth/oauth2.0.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
		private authService: Oauth20Service
    ) { }
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {      
      const currentUser = this.authService.currentUserValue;
      // check if exist user created
      if (currentUser?.id) {
        return true;
      }

      // check route is /system/back-office/sing-up if not, redirect
      if (route.routeConfig?.path) {
        if (/system\/back-office\/sing-up/.test(route.routeConfig?.path) == false) {
          this.router.navigate(['system/back-office/sing-up'], { queryParams: { returnMessage: 'Registre um Usuário para poder publicar seus artigos.' }})
        }
      }

    return true;
  }
  
}
