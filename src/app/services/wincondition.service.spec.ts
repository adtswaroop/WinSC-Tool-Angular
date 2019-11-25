import { TestBed } from '@angular/core/testing';

import { WinconditionService } from './wincondition.service';

describe('WinconditionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WinconditionService = TestBed.get(WinconditionService);
    expect(service).toBeTruthy();
  });
});
