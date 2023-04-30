import { Component, Injector, Input, OnInit } from '@angular/core';
import { TComponentQueryEvent } from 'src/app/shared/builder/system/t-component-query-event/t-component-query-event';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent extends TComponentQueryEvent implements OnInit {

  @Input() title: string = 'Create new Post';
  @Input() isView: boolean = true;

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  actionFall(): void {
    this._router.navigate(['/system/back-office/posts']);
  }

  actionSave(): void {
    
  }

}
