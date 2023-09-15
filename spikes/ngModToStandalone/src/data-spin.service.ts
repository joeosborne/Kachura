import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataSpinService {
  constructor() {}

  getStuff(): string {
    return 'stuff'
  }
}