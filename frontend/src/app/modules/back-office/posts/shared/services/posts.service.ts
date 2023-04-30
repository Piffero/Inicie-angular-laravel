import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/core/base.service';
import { PostsInterface } from '../interfaces/posts.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends BaseService<Array<PostsInterface>, PostsInterface, string> {

  override request: string = 'api/posts';

  constructor(protected override http: HttpClient) {
    super(http);
  }

  findAll(): Observable<Array<PostsInterface>> {
    this.setNewRouter(this.request, true); // vamos confirmar a rota
    return this.getAll();
  }

  findId(id: number): Observable<PostsInterface> {
    this.setNewRouter(this.request, true); // vamos confirmar a rota
    return this.getItem(id);
  }
}
