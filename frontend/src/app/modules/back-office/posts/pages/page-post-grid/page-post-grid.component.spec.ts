import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePostGridComponent } from './page-post-grid.component';

describe('PagePostGridComponent', () => {
  let component: PagePostGridComponent;
  let fixture: ComponentFixture<PagePostGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePostGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePostGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
