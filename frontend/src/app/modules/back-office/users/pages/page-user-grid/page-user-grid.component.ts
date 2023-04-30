import { Component, Injector, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
import { TComponentQueryEvent } from 'src/app/shared/builder/system/t-component-query-event/t-component-query-event';
import { registryUserInterface } from 'src/app/shared/interface/registry-user.interface';

@Component({
  selector: 'app-page-user-grid',
  templateUrl: './page-user-grid.component.html',
  styleUrls: ['./page-user-grid.component.css']
})
export class PageUserGridComponent extends TComponentQueryEvent implements OnInit {

  public users: registryUserInterface[] = [];

  constructor(
    protected injector: Injector,
    private service: UsersService) { 
    super(injector);
  }

  ngOnInit(): void {
    this._route.data
        .subscribe((data) => { 
          this.users = data['users'];          
         })
  }

  findUser(id: number) {
    if (id) {
      this.service.findItem(id)
                .subscribe((data) => {
                  this.users = [data];
                });
    } else {
      this.service.findAll()
      .subscribe((data) => {
        this.users = data;
      });
    }
  }
}
