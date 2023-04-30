import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { BuilderModule } from 'src/app/shared/builder/builder.module';


@NgModule({
  declarations: [
    PageMainComponent    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,    
    BuilderModule,     
  ]
})
export class MainModule { }
