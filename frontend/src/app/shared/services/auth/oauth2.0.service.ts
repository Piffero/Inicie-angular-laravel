import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { registryUserInterface } from '../../interface/registry-user.interface';
import { Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Injectable({
  providedIn: 'root'
})
export class Oauth20Service {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<registryUserInterface>;

  constructor(private router: Router) { 
    this.currentUserSubject = new BehaviorSubject<registryUserInterface>(this.getLocalStorage());
		this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): registryUserInterface {
		this.localStorageExpires();
		return this.currentUserSubject.value;
	}

  public getLocalStorage(): registryUserInterface {
		let itemValue = localStorage.getItem('currentUser')
		if (itemValue && /^\{(.*?)\}$/.test(itemValue)) {
			const logged = JSON.parse(itemValue);
			if (logged != undefined) {
				return logged
			}
		}
		return {id: 0, name: '', email: '', gender: '', status: '', expire_times: 0}
	}

  public setLocalStorage(currentUser: registryUserInterface): void {
		let die = new Date().getTime() + (60000 * 30);
		currentUser.expire_times = die;
		localStorage.setItem('currentUser', JSON.stringify(currentUser));
	}

  public localStorageExpires(): void {
		let currentDate = new Date().getTime(); //Data atual em milissegundos
		let itemValue = localStorage.getItem('currentUser')
		if (itemValue && /^\{(.*?)\}$/.test(itemValue)) {
			let current = JSON.parse(itemValue);
			const difference = current.expire_times - currentDate;
			const totalDays = Math.ceil(difference / (1000 * 3600 * 24));
			if (current.expire_times && totalDays > 1) {
				this.singUp();
			}
			
			if (!current.id || current.id == undefined ) {
				this.singUp();
			}
		}
	}

  public singUp(): void {
		// remover usuário do armazenamento local e definir usuário atual como nulo
		localStorage.removeItem('currentUser')
		this.currentUserSubject.next(null);    
		this.router.navigate(['/system/back-office/security/sing-in']).then(() => {
			platformBrowserDynamic().destroy();
		});
	}
  
}
