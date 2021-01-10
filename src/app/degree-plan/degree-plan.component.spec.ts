import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreePlanComponent } from './degree-plan.component';

describe('DegreePlanComponent', () => {
  let component: DegreePlanComponent;
  let fixture: ComponentFixture<DegreePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
