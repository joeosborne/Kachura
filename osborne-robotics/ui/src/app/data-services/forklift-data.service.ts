import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, signal } from '@angular/core';
import { Constants } from '../shared/constants';

export interface Forklift {
  name: string;
  modelNumber: string;
  manufacturingDate: string; // todo: change type to Date
  age?: number;
  dueForAService?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ForkliftDataService {
  forklifts = signal<any>({});
  constructor(private http: HttpClient) {}

  loadForklifts() {
    this.http.get<any>(Constants.API_FORKLIFTS_GET_ALL).subscribe((x) => {
      // todo: de-dupe
      const forklifts = x.map((forklift: Forklift) => ({
        ...forklift,
        dueForAService: this.forkLiftRequiresAService(forklift),
      }));
      this.forklifts.set(forklifts);
    });
  }

  forkLiftRequiresAService(forklifts: Forklift): boolean {
    return forklifts.age > Constants.SERVICE_REQUIRED_THRESHOLD;
  }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(Constants.API_FORKLIFTS_UPLOAD_JSON, formData, {
      headers: new HttpHeaders(),
    });
  }
}
