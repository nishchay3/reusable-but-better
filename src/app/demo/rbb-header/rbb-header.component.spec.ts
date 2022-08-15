import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbbHeaderComponent } from './rbb-header.component';

describe('RbbHeaderComponent', () => {
  let component: RbbHeaderComponent;
  let fixture: ComponentFixture<RbbHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbbHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RbbHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
