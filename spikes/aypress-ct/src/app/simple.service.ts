import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  constructor() { }

  getANumber():number{
    console.log('in SimpleService|getANumber')
    return 123;
  }
}
