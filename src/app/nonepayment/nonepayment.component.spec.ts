import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonepaymentComponent } from './nonepayment.component';

describe('NonepaymentComponent', () => {
  let component: NonepaymentComponent;
  let fixture: ComponentFixture<NonepaymentComponent>;

  beforeEach(async(() => {
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
