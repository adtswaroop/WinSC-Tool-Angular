import { TestBed } from '@angular/core/testing';

import { WinHolderPriorizationService } from './win-holder-priorization.service';

describe('WinHolderPriorizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WinHolderPriorizationService = TestBed.get(WinHolderPriorizationService);
    expect(service).toBeTruthy();
  });
});
