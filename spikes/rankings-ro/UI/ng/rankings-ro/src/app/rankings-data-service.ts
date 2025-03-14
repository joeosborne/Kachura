import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {WeightDivision} from "./model/weight-division";
import {Boxer} from "./model/boxer";

@Injectable({
  providedIn: 'root',
})
export class RankingsDataService {
  private readonly baseUrl = 'https://localhost:7239/';

  constructor(private http: HttpClient) {}

  getWeightDivisions(): Observable<WeightDivision[]> {
    const url = `${this.baseUrl}weights`;
    return this.http.get<WeightDivision[]>(url);
  }

  getBoxers(): Observable<Boxer[]> {
    const url = `${this.baseUrl}boxers`;
    return this.http.get<Boxer[]>(url);
  }
}

// todo: strongly type to..

// internal record WeightDivision(int Id, string Name);
// internal record Boxer(int Id, string FullName, int WeightDivisionId, int Won, int Lost, int Drawn);
