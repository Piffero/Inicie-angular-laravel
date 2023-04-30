import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { PageSingUpComponent } from './pages/page-sing-up/page-sing-up.component';
import { SingUpFormComponent } from './components/sing-up-form/sing-up-form.component';
import { BuilderModule } from 'src/app/shared/builder/builder.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageSingUpComponent,
    SingUpFormComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    BuilderModule,    

    //FORMULARIO
    ReactiveFormsModule,
  ],
  exports: [SingUpFormComponent]
})
export class SecurityModule { }
