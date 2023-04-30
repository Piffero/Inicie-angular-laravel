import { Injectable } from '@angular/core';
import { UserPostInterface, UserPostReturnInterface } from '../interfaces/user-post.interface';
import { BaseService } from 'src/app/shared/services/core/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPostService extends BaseService<UserPostReturnInterface, UserPostInterface, string> {

  override request: string = 'api/posts/user';

  constructor(http: HttpClient) {
    super(http);
  }

  findAll($user_id: number): Observable<UserPostReturnInterface> {
    const $url = `${this.request}/${$user_id}/all`;
    this.setNewRouter($url, true); // vamos confirmar a rota
    return this.getAll();
  }
}
