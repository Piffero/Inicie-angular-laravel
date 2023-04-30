import { Component, Injector, OnInit } from '@angular/core';
import { TComponentQueryEvent } from 'src/app/shared/builder/system/t-component-query-event/t-component-query-event';
import { PostsCommentsInterface } from '../../shared/interfaces/posts-comments.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentsService } from '../../shared/services/comments.service';
import { Oauth20Service } from 'src/app/shared/services/auth/oauth2.0.service';

@Component({
  selector: 'post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent extends TComponentQueryEvent implements OnInit {
  
  public comments: PostsCommentsInterface[] = [];
  public form!: FormGroup;

  constructor(
    private injector: Injector,
    private service: CommentsService,
    private authService: Oauth20Service,
    private formBuilder: FormBuilder) {
    super(injector);
   }

  ngOnInit(): void {
    this.createForm();
    this._route.data
        .subscribe((data) => { 
          this.comments = data['comments'];
         });
  }

  createForm() {
    this.form = this.formBuilder.group({
			sendText: ['', Validators.required],
		});
  }

  actionSend() {    
    const user = this.authService.currentUserValue;    
    const post_id = this._route.snapshot.params['id'];    
    const sendText = this.form.get('sendText')?.value;

    let comment: PostsCommentsInterface = {
      post_id: post_id,
      name: user.name,
      email: user.email,
      body: sendText
    }

    this.service.save(comment)
              .subscribe((data: PostsCommentsInterface) => {
                this.comments.unshift(data);
              })
  }
}
