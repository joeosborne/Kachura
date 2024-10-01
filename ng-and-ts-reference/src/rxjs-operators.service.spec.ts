import { TestBed } from '@angular/core/testing';

import { RxjsOperationsService } from './rxjs-operations.service';
import {toArray} from "rxjs";

describe('RxjsOperatorsService', () => {
  let service: RxjsOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('todo:rename', (done) => {
    const x =
    service.
    rxjsMap().su
    console.log(x)
      //expect(result).toEqual([2, 4, 6, 8, 10]); // Verify the result
      //done(); // Call done to indicate async test completion
    });
    // service.
    // rxjsMap().pipe(
    //   toArray() // Collect all emitted values into an array
    // ).subscribe(result => {
    //   expect(result).toEqual([2, 4, 6, 8, 10]); // Verify the result
    //   done(); // Call done to indicate async test completion
    // });
  //});
});
