import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { PostsInterface } from '../interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostItemResolver implements Resolve<PostsInterface> {
  constructor(private postsService: PostsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostsInterface> {
    let id = route.params['id'];
    return this.postsService.findId(id).pipe(map((result) => result));
  }
}
