import { TestBed } from '@angular/core/testing';

import { SkycoService } from './skyco.service';

describe('SkycoService', () => {
  let service: SkycoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkycoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
