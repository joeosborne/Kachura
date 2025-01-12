import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, signal } from '@angular/core';

export interface Forklift {
  name: string;
  modelNumber: string;
  manufacturingDate: string; //todo: change to Date
  age?: number;
  dueForAService?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ForkliftDataServiceService {
  // TODO: DE-DUPE
  serviceRequiredThreshold = 5;

  private apiUrl = 'http://localhost:5286/forklifts';
  forklifts = signal<any>({});
  constructor(private http: HttpClient) {}

  loadForklifts() {
    this.http.get<any>(this.apiUrl).subscribe((x) => {
      // todo: de-dupe
      const forklifts = x.map((forklift: Forklift) => ({
        ...forklift,
        dueForAService: this.forkLiftRequiresAService(forklift),
      }));
      this.forklifts.set(forklifts);
    });
  }

  forkLiftRequiresAService(forklifts: Forklift): boolean {
    return forklifts.age > this.serviceRequiredThreshold;
  }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(
      'http://localhost:5286/forklifts/upload-json',
      formData,
      {
        headers: new HttpHeaders(),
      },
    );
  }
}
