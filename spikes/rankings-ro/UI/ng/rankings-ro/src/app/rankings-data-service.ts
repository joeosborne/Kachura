import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RankingsDataService {
  private readonly baseUrl = 'https://localhost:7239/';

  constructor(private http: HttpClient) {}

  getWeightDivisions(): Observable<any[]> {
    const url = `${this.baseUrl}weights`;
    return this.http.get<any[]>(url);
  }
}


// todo: strongly type to..

// internal record WeightDivision(int Id, string Name);
// internal record Boxer(int Id, string FullName, int WeightDivisionId, int Won, int Lost, int Drawn);