// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-file-upload',
//   imports: [],
//   templateUrl: './file-upload.component.html',
//   styleUrl: './file-upload.component.css'
// })
// export class FileUploadComponent {
//
// }



import { Component } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {FileUploadService} from '../file-upload.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  template: `
      <div>
          <h2>Upload JSON File</h2>
          <input type="file" (change)="onFileSelected($event)"/>
          <button (click)="upload()">Upload</button>
          <p *ngIf="message">{{ message }}</p>
      </div>
  `,
  imports: [
    NgIf,
    CommonModule, HttpClientModule
  ],
  standalone: true
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  message: string = '';

  constructor(private fileUploadService: FileUploadService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  upload(): void {
    if (!this.selectedFile) {
      this.message = 'Please select a file.';
      return;
    }

    this.fileUploadService.uploadFile(this.selectedFile).subscribe({
      next: (response) => {
        this.message = `Success: ${response.message}, Total Items: ${response.totalItems}`;
      },
      error: (error) => {
        this.message = `Error: ${error.message}`;
      },
    });
  }
}
