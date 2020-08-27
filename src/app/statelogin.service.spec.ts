import { TestBed } from '@angular/core/testing';

import { StateloginService } from './statelogin.service';

describe('StateloginService', () => {
  let service: StateloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
