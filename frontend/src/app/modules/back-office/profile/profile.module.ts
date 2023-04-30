import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { ProfilePanelComponent } from './components/profile-panel/profile-panel.component';
import { SecurityModule } from '../security/security.module';
import { ProfilePostsComponent } from './components/profile-posts/profile-posts.component';


@NgModule({
  declarations: [
    PageProfileComponent,
    ProfilePanelComponent,
    ProfilePostsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SecurityModule
  ]
})
export class ProfileModule { }
