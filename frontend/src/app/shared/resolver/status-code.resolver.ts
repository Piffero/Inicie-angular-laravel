import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { StatusCodeInterface } from '../interface/status-code.interface';

@Injectable({
  providedIn: 'root'
})
export class StatusCodeResolver implements Resolve<StatusCodeInterface[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StatusCodeInterface[]> {
    return of(this.getStatusCodeList());
  }

  getStatusCodeList(): StatusCodeInterface[] {
    return [
      {statusCode: 200, message: 'A solicitação foi bem-sucedida'},
      {statusCode: 201, message: 'A solicitação foi bem-sucedida e um novo recurso foi criado como resultado'},
      {statusCode: 400, message: 'O servidor não pode ou não processará a solicitação devido a algo que é percebido como um erro do cliente'},
      {statusCode: 401, message: 'Não autorizado'},
      {statusCode: 403, message: 'Você não tem permissão de acesso ao conteúdo'},
      {statusCode: 404, message: 'Não foi possível encontrar o recurso solicitado'}
    ];
  }
}
