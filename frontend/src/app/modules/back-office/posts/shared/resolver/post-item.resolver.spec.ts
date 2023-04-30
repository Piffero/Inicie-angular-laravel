import { TestBed } from '@angular/core/testing';

import { PostItemResolver } from './post-item.resolver';

describe('PostItemResolver', () => {
  let resolver: PostItemResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PostItemResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
