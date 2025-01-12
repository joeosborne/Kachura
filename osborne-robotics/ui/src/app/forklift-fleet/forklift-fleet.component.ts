import { Component, OnInit } from '@angular/core';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { ForkliftDataServiceService } from '../data-services/forklift-data-service.service';
import { CommonModule, NgForOf, NgIf, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forklift-fleet',
  imports: [
    FileUploadComponent,
    NgStyle,
    NgForOf,
    NgIf,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './forklift-fleet.component.html',
  styleUrl: './forklift-fleet.component.css',
  standalone: true,
})
export class ForkliftFleetComponent implements OnInit {
  forklifts: any; //todo: change

  constructor(private forkliftService: ForkliftDataServiceService) {
    this.forklifts = this.forkliftService.forklifts;
  }

  ngOnInit(): void {
    this.forkliftService.loadForklifts();
  }

  // todo: Utils
  onlyShowServiceableForklifts = false;

  // TODO: DE-DUPE
  serviceRequiredThreshold = 5;
}
