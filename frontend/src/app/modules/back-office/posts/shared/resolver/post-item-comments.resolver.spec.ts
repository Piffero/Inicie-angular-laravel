import { TestBed } from '@angular/core/testing';

import { PostItemCommentsResolver } from './post-item-comments.resolver';

describe('PostItemCommentsResolver', () => {
  let resolver: PostItemCommentsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PostItemCommentsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
