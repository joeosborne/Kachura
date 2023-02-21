import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const firstNameObs$ = of('Joe');
    const lastNameObs$ = of('Osborne');
    const finalObs$ = firstNameObs$.pipe(
      mergeMap((event1) =>
        lastNameObs$.pipe(map((event2) => `${event1} ${event2}`))
      )
    );
    const subscription = finalObs$.subscribe((value) => console.log(value));
  }
}
