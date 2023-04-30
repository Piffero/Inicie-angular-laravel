import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { registryUserInterface } from 'src/app/shared/interface/registry-user.interface';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<registryUserInterface[]> {
  constructor(private service: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<registryUserInterface[]> {
    return this.service.findAll().pipe(map(result => result));
  }
}
