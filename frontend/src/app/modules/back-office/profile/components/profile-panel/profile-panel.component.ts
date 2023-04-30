import { Component, OnInit } from '@angular/core';
import { UserPostService } from '../../shared/services/user-post.service';
import { registryUserInterface } from 'src/app/shared/interface/registry-user.interface';
import { UserPostInterface } from '../../shared/interfaces/user-post.interface';

@Component({
  selector: 'profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.css']
})
export class ProfilePanelComponent implements OnInit {

  public profileTitle: string = 'Data User Last Registry';
  public activeInbox: boolean = true;
  public activeData: boolean = false;
  public numberAvatar: number = 1;
  public currentUser!: registryUserInterface;
  public currentUserPosts: any = [];

  constructor(
    private service: UserPostService
  ) { }

  ngOnInit(): void {
  }

  activeTab(tab: string) {
    this.activeInbox = false;
    this.activeData = false;
    switch (tab) {
      case 'inbox':
        this.activeInbox = true;
        break;
      case 'data':
        this.activeData = true;
        break;
    }
  }

  setAvatar($event: number) {
    this.numberAvatar = $event;
  }

  setCurrentUser($event: registryUserInterface) {    
    this.currentUser = $event;
    if (this.currentUser.id) {
      this.service.findAll(this.currentUser.id)
                  .subscribe(data => {
                    this.currentUserPosts = data;
                  })
    }    
  }
    
}
