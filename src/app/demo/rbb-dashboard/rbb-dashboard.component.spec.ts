import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbbDashboardComponent } from './rbb-dashboard.component';

describe('RbbDashboardComponent', () => {
  let component: RbbDashboardComponent;
  let fixture: ComponentFixture<RbbDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbbDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RbbDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
