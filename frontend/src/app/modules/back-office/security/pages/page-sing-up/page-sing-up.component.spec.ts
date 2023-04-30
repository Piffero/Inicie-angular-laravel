import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSingUpComponent } from './page-sing-up.component';

describe('PageSingUpComponent', () => {
  let component: PageSingUpComponent;
  let fixture: ComponentFixture<PageSingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSingUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
