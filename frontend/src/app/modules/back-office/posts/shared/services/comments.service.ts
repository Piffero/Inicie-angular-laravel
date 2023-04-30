import { Injectable } from '@angular/core';
import { PostsCommentsInterface } from '../interfaces/posts-comments.interface';
import { BaseService } from 'src/app/shared/services/core/base.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService extends BaseService<Array<PostsCommentsInterface>, PostsCommentsInterface, string> {
  
  override request: string = 'api/comments/post';

  constructor(protected override http: HttpClient) {
    super(http);
  }

  findAll(post_id: number): Observable<PostsCommentsInterface[]> {
    this.setNewRouter(`${this.request}/${post_id}/all`, true);
    return this.getAll();
  }

  save(comment: PostsCommentsInterface): Observable<PostsCommentsInterface> {
    this.setNewRouter(`${this.request}/${comment.post_id}/create`, true);
    return this.create(comment);
  }
}
