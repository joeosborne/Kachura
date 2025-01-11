import {Component, OnInit} from '@angular/core';
import {FileUploadComponent} from '../file-upload/file-upload.component';
import {Forklift, ForkliftDataServiceService} from '../forklift-data-service.service';
import {CommonModule, NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-forklift-fleet',
  imports: [
    FileUploadComponent,
    NgStyle,
    NgForOf,
    NgIf,
    CommonModule,
  ],
  templateUrl: './forklift-fleet.component.html',
  styleUrl: './forklift-fleet.component.css',
  standalone: true,
})
export class ForkliftFleetComponent implements OnInit{

  // inject forkliftService into constructor
  forklifts: Forklift[] = [];
  constructor(private forkliftService: ForkliftDataServiceService) {}

  ngOnInit(): void {
    console.log('getForklifts...')
    this.forkliftService.getForklifts().subscribe({
      next: (data) => {
        this.forklifts = data.map(forklift => ({
          ...forklift,
          dueForAService: this.forkLiftRequiresAService(forklift)
        }));

        //this.forklifts = data;
        console.log('Forklifts...');
        console.log(this.forklifts)
      },
      error: (err) => {
        console.error('Error fetching forklifts:', err);
      }
    });
  }

  // todo: Utils
  forkLiftRequiresAService(forklifts: Forklift):boolean{
    // todo: add const
    return forklifts.age > 5;

  }


}
