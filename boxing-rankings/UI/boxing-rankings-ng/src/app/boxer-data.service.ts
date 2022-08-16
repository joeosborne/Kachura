import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BoxerDataService {

    //private readonly urlPrefixAdmin = `${EnvironmentFacade.apiUrl}Admin/`;
 //   private readonly urlPrefixAdmin = ``;
  constructor(private http: HttpClient) {}

  // todo: strongly type objects

  getBoxers(): Observable<any[]> {
    // todo: move url
    const apiUrl = `http://localhost:3000/boxers`;
    return this.http.get<any[]>(apiUrl);
  }

  getWeights(): Observable<any[]> {
    // todo: move url
    const apiUrl = `http://localhost:3000/weights`;
    return this.http.get<any[]>(apiUrl);
  }
}

//
// OPEN (Fury retires 8/15/2022)	-	-	***
// 1	Oleksandr Usyk	19-0-0 (13)	UKR	1
// 2	Anthony Joshua	24-2-0 (22)	ENG	2
// 3	Deontay Wilder	42-2-1 (41)	USA	3
// 4	Andy Ruiz Jr.	34-2-0 (22)	USA	4
// 5	Joseph Parker	30-2-0 (21)	NZ	5
// 6	Joe Joyce	14-0-0 (13)	ENG	6
// 7	Dillian Whyte	28-2-0 (19)	ENG	7
// 8	Luis Ortiz	33-2-0 (28)	CUB	8
// 9	Otto Wallin	24-1-0 (14)	SWE	9
// 10	Michael Hunter	20-1-2 (14)	USA	10
