import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateemployeeComponent } from './createemployee.component';

describe('CreateemployeeComponent', () => {
  let component: CreateemployeeComponent;
  let fixture: ComponentFixture<CreateemployeeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
