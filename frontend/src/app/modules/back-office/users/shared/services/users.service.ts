import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { registryUserInterface } from 'src/app/shared/interface/registry-user.interface';
import { BaseService } from 'src/app/shared/services/core/base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<registryUserInterface[], registryUserInterface, string> {

  override request: string = 'api/users';

  constructor(http: HttpClient) {
    super(http);
  }

  findAll(): Observable<registryUserInterface[]> {
    this.setNewRouter(this.request, true);
    return this.getAll();
  }

  findItem(id: number): Observable<registryUserInterface> {
    this.setNewRouter(this.request, true);
    return this.getItem(id);
  }
}
