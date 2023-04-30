import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePostFormComponent } from './page-post-form.component';

describe('PagePostFormComponent', () => {
  let component: PagePostFormComponent;
  let fixture: ComponentFixture<PagePostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePostFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
