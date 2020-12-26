import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdateemployeeComponent } from './updateemployee.component';

describe('UpdateemployeeComponent', () => {
  let component: UpdateemployeeComponent;
  let fixture: ComponentFixture<UpdateemployeeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
