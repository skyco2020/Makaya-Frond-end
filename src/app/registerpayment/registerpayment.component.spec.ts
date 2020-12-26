import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegisterpaymentComponent } from './registerpayment.component';

describe('RegisterpaymentComponent', () => {
  let component: RegisterpaymentComponent;
  let fixture: ComponentFixture<RegisterpaymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
