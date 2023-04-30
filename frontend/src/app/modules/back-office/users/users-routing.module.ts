import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUserGridComponent } from './pages/page-user-grid/page-user-grid.component';
import { UsersResolver } from './shared/resolver/users.resolver';

const routes: Routes = [
  {
    path: '', 
    component: PageUserGridComponent,
    resolve: {
      users: UsersResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
