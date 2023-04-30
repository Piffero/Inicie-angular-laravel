import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSideBarComponent } from './t-side-bar.component';

describe('TSideBarComponent', () => {
  let component: TSideBarComponent;
  let fixture: ComponentFixture<TSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
