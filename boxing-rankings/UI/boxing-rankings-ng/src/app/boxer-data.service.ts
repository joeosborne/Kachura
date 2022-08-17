import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BoxerDataService {
  constructor(private http: HttpClient) {}

  // todo: strongly type objects

  getBoxers(): Observable<any[]> {
    // todo: move url
    const apiUrl = `http://localhost:3000/boxers`;
    // todo: rxjs tap into observable and add boxers in local storage
    return this.http.get<any[]>(apiUrl);
  }

  getWeights(): Observable<any[]> {
    // todo: move url
    const apiUrl = `http://localhost:3000/weights`;
    // todo: rxjs tap into observable and add weight in local storage
    return this.http.get<any[]>(apiUrl);
  }
}
