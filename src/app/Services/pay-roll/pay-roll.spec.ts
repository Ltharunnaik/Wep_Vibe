import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRoll } from './pay-roll';

describe('PayRoll', () => {
  let component: PayRoll;
  let fixture: ComponentFixture<PayRoll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayRoll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayRoll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
