import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/shared/services/core/base.service';
import { SingUpInterface, SingUpReturnInterface } from '../interfaces/sing-up.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingUpService extends BaseService<Array<SingUpInterface>, SingUpInterface, string> {
  
  override request: string = 'api/users';

  constructor(http: HttpClient) {
    super(http);
  }

  save(body: SingUpInterface): Observable<SingUpInterface> {
    this.setNewRouter(this.request, true); // vamos confirmar a rota

    // valida para saber o que queremos fazer
    if (body.id != undefined) {
      return this.change(body.id, body);      
    }
    return this.create(body);    
  }
}
