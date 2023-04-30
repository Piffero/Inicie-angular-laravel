import { TestBed } from '@angular/core/testing';

import { StatusCodeResolver } from './status-code.resolver';

describe('StatusCodeResolver', () => {
  let resolver: StatusCodeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StatusCodeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
