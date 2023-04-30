import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TComponentQueryEvent } from 'src/app/shared/builder/system/t-component-query-event/t-component-query-event';
import { Oauth20Service } from 'src/app/shared/services/auth/oauth2.0.service';
import { SingUpInterface } from '../../shared/interfaces/sing-up.interface';
import { SingUpService } from '../../shared/services/sing-up.service';
import { registryUserInterface } from 'src/app/shared/interface/registry-user.interface';

@Component({
  selector: 'sing-up-form',
  templateUrl: './sing-up-form.component.html',
  styleUrls: ['./sing-up-form.component.css']
})
export class SingUpFormComponent extends TComponentQueryEvent implements OnInit {

  @Input() title: string = 'Sing-up new User';
  @Input() isView: boolean = true;
  @Output() gender = new EventEmitter<number>;
  @Output() currentUser = new EventEmitter<registryUserInterface>;
  
  message: string = '';
  public form!: FormGroup;
  public nId!: number;

  constructor(
    private injector: Injector,
    private authService: Oauth20Service,
    private service: SingUpService,
    private formBuilder: FormBuilder) {
    super(injector);
  }

  ngOnInit(): void {    
    const returnMessage = this._route.snapshot.queryParams['returnMessage'];
    if (returnMessage) {
      this.message = returnMessage;
    }

    this.createForm();
    if (window.location.pathname) {
      if (/system\/back-office\/profile/.test(window.location.pathname)) {
        this.setForm();    
      }
    }
  }
  
  createForm() {
    this.form = this.formBuilder.group({
			name: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      status: ['', Validators.required]
		});
  }

  setForm() {
    const user = this.authService.currentUserValue;
    this.nId = (user.id)? user.id : 0;
    this.setCurrentUser(user);

    this.form.get('name')?.setValue(user.name);
    this.form.get('email')?.setValue(user.email);
    this.form.get('gender')?.setValue(user.gender);
    this.form.get('status')?.setValue(user.status);
    
    let gender = {currentTarget: {value: user.gender}}
    this.alterGender(gender);
  }

  actionFall(): void {
    this._router.navigate(['/system']);
  }

  actionSave(): void {
    const name = this.form.get('name')?.value;
    const email = this.form.get('email')?.value;
    const gender = this.form.get('gender')?.value;
    const status = this.form.get('status')?.value;

    const user: SingUpInterface = {
      name: name,
      email: email,
      gender: gender,
      status: status
    }

    if (this.nId) {
      user.id = this.nId;
    }
    
    this.service.save(user).subscribe(
      (data: any) => {        
        this.authService.setLocalStorage(data);
        this.message = 'Usuário com sucesso.';
      });
  }

  alterGender($event: any): void {
    if ($event.currentTarget.value == 'male') {
      this.gender.emit(1);
    } else if ($event.currentTarget.value == 'female') {
      this.gender.emit(3);
    }
  }

  setCurrentUser(user: registryUserInterface) {
    this.currentUser.emit(user);
  }

}
