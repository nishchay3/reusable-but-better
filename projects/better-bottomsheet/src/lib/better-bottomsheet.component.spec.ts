import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterBottomsheetComponent } from './better-bottomsheet.component';

describe('BetterBottomsheetComponent', () => {
  let component: BetterBottomsheetComponent;
  let fixture: ComponentFixture<BetterBottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetterBottomsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetterBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
