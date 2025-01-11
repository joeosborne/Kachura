import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {
  Forklift,
  ForkliftDataServiceService,
} from '../forklift-data-service.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  imports: [NgIf, CommonModule],
  standalone: true,
})
export class FileUploadComponent {
  errorMsg: string = '';
  message: string = '';
  selectedFile: File | null = null;

  constructor(private forkliftService: ForkliftDataServiceService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.message = '';
      this.errorMsg = '';
    }
  }

  upload(): void {
    if (!this.selectedFile) {
      this.errorMsg = 'Please select a file.';
      return;
    }

    this.forkliftService.uploadFile(this.selectedFile).subscribe({
      next: (response) => {
        // todo: de-dupe
        response.forklifts = response.forklifts.map((forklift: Forklift) => ({
          ...forklift,
          dueForAService:
            this.forkliftService.forkLiftRequiresAService(forklift),
        }));

        this.forkliftService.forklifts.set(response.forklifts);
        this.message = `Success: ${response.message}, Total Items: ${response.totalItems}`;
      },
      error: (error) => {
        //todo: log error
        //this.errorMsg = `Error: ${error.message}`;
        this.errorMsg =
          'There was an error uploading this file. Please check that it is formatted correctly and try again';
      },
    });
  }
}
