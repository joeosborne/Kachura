import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-map-and-pluck',
  templateUrl: './map-and-pluck.component.html',
  styleUrls: ['./map-and-pluck.component.css'],
})
export class MapAndPluckComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const data = [
      { id: 1, yada: 'one' },
      { id: 2, yada: 'two' },
      { id: 3, yada: 'three' },
    ];

    // NOTE: Use map and optional chaining: pluck('foo', 'bar') is map(x => x?.foo?.bar). Will be removed in v8.
    const obsPluck$ = from(data)
      .pipe(map((x) => x?.yada))
      .subscribe((x) => {
        console.log('----');
        console.log('in pluck (replacement) subs..');
        console.log(x);
      });

    const obsMap$ = from(data)
      .pipe(
        // pluck('value')
        map((data) => data.yada)
      )
      .subscribe((x) => {
        console.log('----');
        console.log('in map subs..');
        console.log(x);
      });


    let products = [{
      id: 0,
      name: 'Product 1'
    },{
      id: 1,
      name: 'Product 2'
    }];

    let productsIds = products.map(product => product.id);
    console.log('---');
    console.log('productsIds...');
    console.log(productsIds); // [0, 1]
  }
}
