import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPageMenuModule } from './standard/t-page-menu/t-page-menu.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TPageMenuModule,
  ],
  exports: [
    TPageMenuModule,
  ]
})
export class BuilderModule { }
