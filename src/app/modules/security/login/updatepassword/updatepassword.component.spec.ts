import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdatepasswordComponent } from './updatepassword.component';

describe('UpdatepasswordComponent', () => {
  let component: UpdatepasswordComponent;
  let fixture: ComponentFixture<UpdatepasswordComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
