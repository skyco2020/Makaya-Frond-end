import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FinishpaymentComponent } from './finishpayment.component';

describe('FinishpaymentComponent', () => {
  let component: FinishpaymentComponent;
  let fixture: ComponentFixture<FinishpaymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
