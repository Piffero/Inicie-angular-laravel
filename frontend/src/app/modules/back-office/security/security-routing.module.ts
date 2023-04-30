import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSingUpComponent } from './pages/page-sing-up/page-sing-up.component';

const routes: Routes = [
  {
    path: '', 
    component: PageSingUpComponent,
    resolve: {}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
