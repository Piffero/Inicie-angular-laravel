import { Component, Injector, OnInit } from '@angular/core';
import { TComponentQueryEvent } from 'src/app/shared/builder/system/t-component-query-event/t-component-query-event';
import { PostsInterface } from '../../shared/interfaces/posts.interface';
import { Oauth20Service } from 'src/app/shared/services/auth/oauth2.0.service';
import { registryUserInterface } from 'src/app/shared/interface/registry-user.interface';

@Component({
  selector: 'post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent extends TComponentQueryEvent implements OnInit {

  public post: PostsInterface = {
    user_id: 0,
    title: '',
    body: ''
  };

  public myPost: boolean = false;
  public currentUser!: registryUserInterface;

  constructor(
    private injector: Injector,
    private authService: Oauth20Service) {
    super(injector);
  }

  ngOnInit(): void {
    this._route.data
        .subscribe((data) => { 
          this.post = data['post'];
          this.currentUser = this.authService.currentUserValue;
          this.myPost = (this.currentUser.id == this.post.user_id);
         });
  }

}
