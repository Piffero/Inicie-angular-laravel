import { Component, Injector, OnInit } from '@angular/core';
import { TComponentQueryEvent } from 'src/app/shared/builder/system/t-component-query-event/t-component-query-event';
import { PostsInterface } from '../../shared/interfaces/posts.interface';

@Component({
  selector: 'post-grid',
  templateUrl: './post-grid.component.html',
  styleUrls: ['./post-grid.component.css']
})
export class PostGridComponent extends TComponentQueryEvent implements OnInit {

  public posts: PostsInterface[] = [];

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._route.data
        .subscribe((data) => { 
          this.posts = data['posts'];          
         })
  }

  actionAdd():void {
    this._router.navigate(['/system/back-office/posts/add']);
  }
}
