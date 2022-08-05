import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomsheetContentComponent } from './bottomsheet-content.component';

describe('BottomsheetContentComponent', () => {
  let component: BottomsheetContentComponent;
  let fixture: ComponentFixture<BottomsheetContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomsheetContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomsheetContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
