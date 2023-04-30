import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSideMainMenuComponent } from './t-side-main-menu.component';

describe('TSideMainMenuComponent', () => {
  let component: TSideMainMenuComponent;
  let fixture: ComponentFixture<TSideMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TSideMainMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TSideMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
