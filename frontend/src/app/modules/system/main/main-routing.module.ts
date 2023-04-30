import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { SideMainMenuListResolver } from './shared/resolver/side-main-menu-list.resolver';

const routes: Routes = [
  { 
    path: '', 
    component: PageMainComponent,
    resolve: {
      sideMainMenuItems: SideMainMenuListResolver,
    },
    children: [    
      { path: 'back-office', loadChildren: () => import('./../../back-office/back-office.module').then(m => m.BackOfficeModule) },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
