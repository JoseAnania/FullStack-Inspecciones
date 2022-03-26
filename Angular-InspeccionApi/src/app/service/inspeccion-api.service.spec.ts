import { TestBed } from '@angular/core/testing';

import { InspeccionApiService } from './inspeccion-api.service';

describe('InspeccionApiService', () => {
  let service: InspeccionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspeccionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
