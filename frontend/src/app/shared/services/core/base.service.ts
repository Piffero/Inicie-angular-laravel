import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<RI, I, T> {
  request!: T;
  router: string;
  arrRouter: Array<any> = [];  

  constructor(
    protected http: HttpClient
  ) {    
    this.arrRouter.push(environment.API_URL);
    if (this.request) {
      this.arrRouter.push(this.request);
    }
    this.router = this.arrRouter.join('/');
  }

  getAll(filters?: any): Observable<RI> {
    let headers = new HttpHeaders();
		headers.set('Content-Type','application/json;');
		headers.append('x-api-key', String(localStorage.getItem('currentUser')))
		
    let params = new HttpParams()
    if (filters) {
      Object.keys(filters).forEach(p => (params = params.append(p, filters[p])))
    }
    
    return this.http.get<RI>(this.router, {headers: headers, params: params});
  }

  getItem(id: number): Observable<I> {
    let headers = new HttpHeaders();
		headers.set('Content-Type','application/json;');
		headers.append('x-api-key', String(localStorage.getItem('currentUser')))
		
		return this.http.get<I>(`${this.router}/${id}`, {
      headers
    });
  }

  create(body: I): Observable<I> {
		let headers = new HttpHeaders();
		headers.set('Content-Type','application/json;');
		headers.append('x-api-key', String(localStorage.getItem('currentUser')))
		
		return this.http.post<I>(this.router, body, {
      headers
    });
	}
  
  change(id: number, body: I) : Observable<I> {
		let headers = new HttpHeaders();
		headers.set('Content-Type','application/json;');
		headers.append('x-api-key', String(localStorage.getItem('currentUser')))
		
		return this.http.put<I>(`${this.router}/${id}`, body, {
      headers
    });
	}

  setNewRouter(route?: string, clearRouter?: boolean): void {
    if (clearRouter) {
      this.arrRouter = [];
    }
    this.arrRouter.pop();       // remove route default
    this.arrRouter.push(environment.API_URL);
    
    if (route) {
      this.arrRouter.push(route);
    } else {
      this.arrRouter.push(this.request);
    }

    this.setRouter();           // (join) format new route
  }

  private setRouter() {
    this.router = this.arrRouter.join('/');
  }
}
