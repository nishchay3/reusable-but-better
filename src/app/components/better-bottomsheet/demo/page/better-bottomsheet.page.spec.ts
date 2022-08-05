import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterBottomsheetPage } from './better-bottomsheet.page';

describe('BetterBottomsheetPage', () => {
  let component: BetterBottomsheetPage;
  let fixture: ComponentFixture<BetterBottomsheetPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetterBottomsheetPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetterBottomsheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
