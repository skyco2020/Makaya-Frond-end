import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NonepaymentComponent } from './nonepayment.component';

describe('NonepaymentComponent', () => {
  let component: NonepaymentComponent;
  let fixture: ComponentFixture<NonepaymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NonepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
