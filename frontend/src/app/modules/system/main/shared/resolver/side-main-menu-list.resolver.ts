import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SideMainMenuListInterface } from '../interface/side-main-menu-list.interface';

@Injectable({
  providedIn: 'root'
})
export class SideMainMenuListResolver implements Resolve<SideMainMenuListInterface[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SideMainMenuListInterface[]> {
    return of(this.getSideMainMenuItens());
  }

  getSideMainMenuItens(): SideMainMenuListInterface[] {
    const preRouter = 'system';
    return [
      {active: false, caption: 'Posts', route: `${preRouter}/back-office/posts`},
      {active: false, caption: 'Users', route: `${preRouter}/back-office/users`},
      {active: false, caption: 'Profile', route: `${preRouter}/back-office/profile`},      
      {active: false, caption: 'Sing-up', route: `${preRouter}/back-office/sing-up`},
    ]
  }
}
