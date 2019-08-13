import { TestBed } from '@angular/core/testing';

import { NetworkCallsService } from './network-calls.service';

describe('NetworkCallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetworkCallsService = TestBed.get(NetworkCallsService);
    expect(service).toBeTruthy();
  });
});
