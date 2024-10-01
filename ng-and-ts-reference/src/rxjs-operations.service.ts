import { Injectable } from '@angular/core';
import {filter, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RxjsOperationsService {

  constructor() { }

  private getNumberArray(): Observable<number[]> {
    const numbers = [1, 2, 3, 4, 5]; // Array of numbers
    return of(numbers); // Return the array as an observable
  }

  // 1. RxJS Map
   rxjsMap():Observable<number[]> {
     // return of(1, 2, 3, 4, 5).pipe(
     //   map(num => num * 10)
     // );
     of(1, 2, 3, 4, 5).pipe(
       map(num => num * 2)
     ).subscribe(result => {return result}); // [2, 4, 6, 8, 10]
    // of(1, 2, 3, 4, 5).pipe(
    //   map(num => num * 2)
    // ).subscribe(result => console.log(result)); // [2, 4, 6, 8, 10]
  }

// // 2. RxJS Filter
//    rxjsFilter() {
//     of(1, 2, 3, 4, 5).pipe(
//       filter(num => num % 2 === 0)
//     ).subscribe(result => console.log('RxJS Filter:', result)); // [2, 4]
//   }
//
// // 3. RxJS Reduce
//    rxjsReduce() {
//     of(1, 2, 3, 4, 5).pipe(
//       reduce((acc, num) => acc + num, 0)
//     ).subscribe(result => console.log('RxJS Reduce:', result)); // 15
//   }
//
// // 4. RxJS MergeMap
//    rxjsMergeMap() {
//     of(1, 2, 3).pipe(
//       mergeMap(num => from([num * 2, num * 3]))
//     ).subscribe(result => console.log('RxJS MergeMap:', result)); // [2, 3, 4, 6, 6, 9]
//   }
//
// // 5. RxJS SwitchMap
//    rxjsSwitchMap() {
//     of(1, 2, 3).pipe(
//       switchMap(num => from([num * 2]))
//     ).subscribe(result => console.log('RxJS SwitchMap:', result)); // [2, 4, 6]
//   }
//
// // 6. RxJS ConcatMap
//    rxjsConcatMap() {
//     of(1, 2, 3).pipe(
//       concatMap(num => from([num * 2]))
//     ).subscribe(result => console.log('RxJS ConcatMap:', result)); // [2, 4, 6]
//   }
//
// // 7. RxJS Take
//    rxjsTake() {
//     interval(1000).pipe(
//       take(3)
//     ).subscribe(result => console.log('RxJS Take:', result)); // [0, 1, 2]
//   }
//
// // 8. RxJS DebounceTime
//    rxjsDebounceTime() {
//     from([1, 2, 3, 4]).pipe(
//       debounceTime(500)
//     ).subscribe(result => console.log('RxJS DebounceTime:', result)); // Debounces and logs last number
//   }
//
// // 9. RxJS DistinctUntilChanged
//    rxjsDistinctUntilChanged() {
//     from([1, 1, 2, 2, 3, 3]).pipe(
//       distinctUntilChanged()
//     ).subscribe(result => console.log('RxJS DistinctUntilChanged:', result)); // [1, 2, 3]
//   }
//
// // 10. RxJS Tap
//    rxjsTap() {
//     of(1, 2, 3).pipe(
//       tap(num => console.log('Tapped:', num)),
//       map(num => num * 2)
//     ).subscribe(result => console.log('RxJS Tap:', result)); // Logs each number and the result after transformation
//   }

}
