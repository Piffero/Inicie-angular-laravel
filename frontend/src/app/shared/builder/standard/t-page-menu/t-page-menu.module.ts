import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TSideBarComponent } from './components/t-side-bar/t-side-bar.component';
import { TSideMainMenuComponent } from './components/t-side-main-menu/t-side-main-menu.component';



@NgModule({
  declarations: [
    TSideBarComponent,
    TSideMainMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TSideBarComponent
  ]
})
export class TPageMenuModule { }
