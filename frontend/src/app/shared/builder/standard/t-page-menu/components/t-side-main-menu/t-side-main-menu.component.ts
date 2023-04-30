import { Component, Input, OnInit } from '@angular/core';
import { PageMenuItemInterface } from '../../interfaces/page-menu-item.interface';

@Component({
  selector: 'TSideMainMenu',
  templateUrl: './t-side-main-menu.component.html',
  styleUrls: ['./t-side-main-menu.component.css']
})
export class TSideMainMenuComponent implements OnInit {

  @Input() menuMainItems: PageMenuItemInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
