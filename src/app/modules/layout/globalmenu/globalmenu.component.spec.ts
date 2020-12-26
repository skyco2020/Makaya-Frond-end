import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlobalmenuComponent } from './globalmenu.component';

describe('GlobalmenuComponent', () => {
  let component: GlobalmenuComponent;
  let fixture: ComponentFixture<GlobalmenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
