import { Component, Input, OnInit } from '@angular/core';
import { PageMenuItemInterface } from '../../interfaces/page-menu-item.interface';

@Component({
  selector: 'TSideBar',
  templateUrl: './t-side-bar.component.html',
  styleUrls: ['./t-side-bar.component.css']
})
export class TSideBarComponent implements OnInit {

  @Input() menuMainItems: PageMenuItemInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
