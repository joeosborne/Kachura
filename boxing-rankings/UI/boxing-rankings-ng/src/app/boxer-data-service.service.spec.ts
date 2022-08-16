import { TestBed } from '@angular/core/testing';

import { BoxerDataService } from './boxer-data.service';

describe('BoxerDataServiceService', () => {
  let service: BoxerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
