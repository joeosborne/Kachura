import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css'],
})
export class TapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const obs$ = of(1, 2, 3, 4, 5);
    obs$
      .pipe(
        tap((val) => console.log(`BEFORE MAP: ${val}`)),
        map((val) => val + 10),
        tap((val) => console.log(`AFTER MAP: ${val}`))
      )
      .subscribe((val) => console.log(val));
  }
}
