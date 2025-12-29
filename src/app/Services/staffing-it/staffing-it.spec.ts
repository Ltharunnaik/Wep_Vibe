import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingIT } from './staffing-it';

describe('StaffingIT', () => {
  let component: StaffingIT;
  let fixture: ComponentFixture<StaffingIT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffingIT]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffingIT);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
