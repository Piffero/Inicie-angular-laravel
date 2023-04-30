import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePostViewComponent } from './page-post-view.component';

describe('PagePostViewComponent', () => {
  let component: PagePostViewComponent;
  let fixture: ComponentFixture<PagePostViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePostViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
