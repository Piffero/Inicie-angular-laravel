import { TestBed } from '@angular/core/testing';

import { SideMainMenuListResolver } from './side-main-menu-list.resolver';

describe('SideMainMenuListResolver', () => {
  let resolver: SideMainMenuListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SideMainMenuListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
