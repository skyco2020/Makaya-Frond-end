import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListemployeComponent } from './listemploye.component';

describe('ListemployeComponent', () => {
  let component: ListemployeComponent;
  let fixture: ComponentFixture<ListemployeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListemployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
