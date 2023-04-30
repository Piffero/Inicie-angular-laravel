import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: 'system', loadChildren: () => import('./modules/system/main/main.module').then(m => m.MainModule)},	
  
	// otherwise rediret to home  
	{ path: '**', redirectTo: 'system' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
