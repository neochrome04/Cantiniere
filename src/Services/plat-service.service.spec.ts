import { TestBed } from '@angular/core/testing';

import { PlatServiceService } from './plat-service.service';

describe('PlatServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatServiceService = TestBed.get(PlatServiceService);
    expect(service).toBeTruthy();
  });
});
