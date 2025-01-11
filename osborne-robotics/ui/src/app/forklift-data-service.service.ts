import {Injectable, signal} from '@angular/core';
import { catchError } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';


export interface Forklift {
  name: string;
  modelNumber: string;
  manufacturingDate: string;//todo: change to Date
  age?: number;
  dueForAService?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ForkliftDataServiceService {
  //private apiUrl = `${environment.apiUrl}/forklifts`;
  private apiUrl = "http://localhost:5286/forklift-fleet";
  forklifts = signal<any>({});
  constructor(private http: HttpClient) {}


  getForklifts(): Observable<Forklift[]> {
    return this.http.get<any>(this.apiUrl); // Sends a GET request to the endpoint
  }

  loadForklifts() {
    this.http
      .get<any>(this.apiUrl)
      .subscribe((x) => {
        console.log(x)
        this.forklifts.set(x);
      });
  }


// getForklifts(): Observable<Forklift[]> {
//   return this.http.get<Forklift[]>(this.apiUrl).pipe(
//     catchError(err => {
//       console.error('Error occurred:', err);
//       return throwError(() => err);
//     })
//   );
// }

}
