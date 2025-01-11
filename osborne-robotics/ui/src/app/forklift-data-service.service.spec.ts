import { TestBed } from '@angular/core/testing';

import { ForkliftDataServiceService } from './forklift-data-service.service';

describe('ForkliftDataServiceService', () => {
  let service: ForkliftDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForkliftDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
