import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePostGridComponent } from './pages/page-post-grid/page-post-grid.component';
import { PagePostFormComponent } from './pages/page-post-form/page-post-form.component';
import { PagePostViewComponent } from './pages/page-post-view/page-post-view.component';
import { PostsResolver } from './shared/resolver/posts.resolver';
import { PostItemResolver } from './shared/resolver/post-item.resolver';
import { of } from 'rxjs';
import { PostItemCommentsResolver } from './shared/resolver/post-item-comments.resolver';

const routes: Routes = [
  {
    path: '', 
    component: PagePostGridComponent,
    resolve: {
      posts: PostsResolver
    }
  },
  {
    path: ':id/view',
    component: PagePostViewComponent,
    resolve: {
      post: PostItemResolver,
      comments: PostItemCommentsResolver
    }
  },
  {
    path: 'add',
    component: PagePostFormComponent,
    resolve: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
