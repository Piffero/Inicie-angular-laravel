import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { PostsInterface } from '../interfaces/posts.interface';
import { PostsService } from '../services/posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<PostsInterface[]> {
  constructor(private postsService: PostsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostsInterface[]> {
    return this.postsService.findAll().pipe(map((result) => result));
  }
}
