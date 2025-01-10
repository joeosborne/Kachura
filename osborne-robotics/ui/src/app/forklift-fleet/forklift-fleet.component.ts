import { Component } from '@angular/core';
import {FileUploadComponent} from '../file-upload/file-upload.component';

@Component({
  selector: 'app-forklift-fleet',
  imports: [
    FileUploadComponent
  ],
  templateUrl: './forklift-fleet.component.html',
  styleUrl: './forklift-fleet.component.css',
  standalone: true,
})
export class ForkliftFleetComponent {

}
