import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Kiwi'];

  constructor() { }

  getData(query: string): Observable<string[]> {
    return of(this.data.filter(item => item.toLowerCase().includes(query.toLowerCase())));
  }
}
