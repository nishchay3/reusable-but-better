import { TestBed } from '@angular/core/testing';

import { BetterBottomsheetService } from './better-bottomsheet.service';

describe('BetterBottomsheetService', () => {
  let service: BetterBottomsheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetterBottomsheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
