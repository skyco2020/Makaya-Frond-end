import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu01Component } from './menu01.component';

describe('Menu01Component', () => {
  let component: Menu01Component;
  let fixture: ComponentFixture<Menu01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menu01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
