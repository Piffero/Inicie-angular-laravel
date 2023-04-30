import { Component, Injector, Input, OnInit } from '@angular/core';
import { TComponentQueryEvent } from 'src/app/shared/builder/system/t-component-query-event/t-component-query-event';
import { registryUserInterface } from 'src/app/shared/interface/registry-user.interface';

@Component({
  selector: 'user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {

  @Input() users: registryUserInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
