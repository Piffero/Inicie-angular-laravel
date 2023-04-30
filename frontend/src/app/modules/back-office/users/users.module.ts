import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PageUserGridComponent } from './pages/page-user-grid/page-user-grid.component';
import { UserGridComponent } from './components/user-grid/user-grid.component';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from '@ngneat/input-mask';


@NgModule({
  declarations: [
    PageUserGridComponent,
    UserGridComponent,
    UserFilterComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,

    //FORMULARIO
    ReactiveFormsModule,
    InputMaskModule
  ]
})
export class UsersModule { }
