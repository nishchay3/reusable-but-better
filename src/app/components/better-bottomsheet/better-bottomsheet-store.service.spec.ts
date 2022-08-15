import { TestBed } from '@angular/core/testing';

import { BetterBottomsheetStoreService } from './better-bottomsheet-store.service';

describe('BetterBottomsheetStoreService', () => {
  let service: BetterBottomsheetStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetterBottomsheetStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
