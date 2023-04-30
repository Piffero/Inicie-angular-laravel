import { TestBed } from '@angular/core/testing';

import { Oauth20Service } from './oauth2.0.service';

describe('Oauth20Service', () => {
  let service: Oauth20Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Oauth20Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
