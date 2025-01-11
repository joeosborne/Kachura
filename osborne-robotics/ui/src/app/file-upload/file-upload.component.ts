import { Component } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {FileUploadService} from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  template: `
<div>
    <div class="mb-3">
        <label for="fileInput" class="text-s text-primary">Choose a file to upload:</label>
        <input type="file" id="fileInput" class="form-control" (change)="onFileSelected($event)" />
    </div>

    <button class="btn btn-primary" (click)="upload()">Upload</button>

    <p *ngIf="message" class="mt-3 text-s text-success">{{ message }}</p>
    <p *ngIf="errorMsg" class="mt-3 text-s text-danger">{{ errorMsg }}</p>
</div>

  `,
  imports: [
    NgIf,
    CommonModule,
  ],
  standalone: true
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  message: string = '';
  errorMsg: string = '';

  constructor(private fileUploadService: FileUploadService) {}

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

    this.fileUploadService.uploadFile(this.selectedFile).subscribe({
      next: (response) => {
        this.message = `Success: ${response.message}, Total Items: ${response.totalItems}`;
      },
      error: (error) => {
        //todo: log error
        //this.errorMsg = `Error: ${error.message}`;
        this.errorMsg = 'There was an error uploading this file. Please check that it is formatted correctly and try again';
      },
    });
  }
}
