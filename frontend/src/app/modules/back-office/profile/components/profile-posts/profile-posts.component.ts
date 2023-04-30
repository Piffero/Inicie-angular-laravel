import { Component, Input, OnInit } from '@angular/core';
import { UserPostInterface } from '../../shared/interfaces/user-post.interface';
import { registryUserInterface } from 'src/app/shared/interface/registry-user.interface';
import { UserPostService } from '../../shared/services/user-post.service';

@Component({
  selector: 'profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.css']
})
export class ProfilePostsComponent implements OnInit {

  @Input() currentUserPosts: UserPostInterface[] = [];
  
  constructor(private service: UserPostService) { }

  ngOnInit(): void {
    
  }

}
