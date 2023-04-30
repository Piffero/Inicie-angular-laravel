import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserGridComponent } from './page-user-grid.component';

describe('PageUserGridComponent', () => {
  let component: PageUserGridComponent;
  let fixture: ComponentFixture<PageUserGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUserGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
