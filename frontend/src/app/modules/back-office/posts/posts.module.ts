import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PagePostGridComponent } from './pages/page-post-grid/page-post-grid.component';
import { PostGridComponent } from './components/post-grid/post-grid.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { PostCommentComponent } from './components/post-comment/post-comment.component';
import { PagePostViewComponent } from './pages/page-post-view/page-post-view.component';
import { PagePostFormComponent } from './pages/page-post-form/page-post-form.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PagePostGridComponent,
    PagePostViewComponent,
    PostGridComponent,
    PostViewComponent,
    PostCommentComponent,
    PagePostFormComponent,
    PostFormComponent,    
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,

    //FORMULARIO
    ReactiveFormsModule
  ]
})
export class PostsModule { }
