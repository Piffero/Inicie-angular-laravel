import { Component, Injector, OnInit } from '@angular/core';
import { SideMainMenuListInterface } from '../../shared/interface/side-main-menu-list.interface';
import { TComponentQueryEvent } from 'src/app/shared/builder/system/t-component-query-event/t-component-query-event';

@Component({
  selector: 'page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.css']
})
export class PageMainComponent extends TComponentQueryEvent implements OnInit {

  pageSideMainItems: SideMainMenuListInterface[] = [];

  constructor(protected _injector: Injector) {
    super(_injector);
  }

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      this.pageSideMainItems = data['sideMainMenuItems'];
    });
  }

}
