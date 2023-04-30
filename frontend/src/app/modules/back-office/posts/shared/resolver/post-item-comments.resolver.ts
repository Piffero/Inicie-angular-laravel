import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostsCommentsInterface } from '../interfaces/posts-comments.interface';
import { CommentsService } from '../services/comments.service';

@Injectable({
  providedIn: 'root'
})
export class PostItemCommentsResolver implements Resolve<PostsCommentsInterface[]> {
  constructor(private service: CommentsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostsCommentsInterface[]> {
    let post_id = route.params['id'];
    return this.service.findAll(post_id);
  }
}
