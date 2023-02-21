import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css'],
})
export class SwitchMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const obs$1 = fromEvent(document, 'click');
    const obs$2 = interval(1000);
    const finalObs$ = obs$1.pipe(switchMap(() => obs$2));
    const subscription = finalObs$.subscribe((value) => {
      console.log('in finalObs$ subs. value...');
      console.log(value);
    });
  }
}
