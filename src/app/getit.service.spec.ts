import { TestBed } from '@angular/core/testing';

import { GetitService } from './getit.service';

describe('GetitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetitService = TestBed.get(GetitService);
    expect(service).toBeTruthy();
  });
});
