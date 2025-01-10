import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {JsonPipe, NgClass, NgForOf, NgStyle} from '@angular/common';
import {AgGridAngular} from 'ag-grid-angular';
import {FormsModule} from '@angular/forms';
import {GridItem} from './grid-item';
import {ForkliftService} from './forklift.service';

export interface CommandResponse {
  x: number,
  y: number, // Initial y-coordinate
  direction: number, // Initial direction in degrees
  command: string,
  actions: string[];
}

// todo: renames chess, circle

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FileUploadComponent, NgForOf, NgStyle, AgGridAngular, NgClass, JsonPipe, FormsModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  squares: GridItem[] = Array.from({ length: 100 });
  forkliftTransform = 'translate(0px, 0px)';
  // todo: dont init twice
  cmdResponse: CommandResponse = {
    x: 0,
    y: 0,
    direction: 0,
    command: '',
    actions: [] = []
  }
  // x = 0; // Initial x-coordinate
  // y = 0; // Initial y-coordinate
  // direction = 0; // Initial direction in degrees
  command = '';
  // actions: string[] = [];


  // add a constructor and inject the forklift service
  constructor(private forkliftService: ForkliftService) {

  }


  runCommand(command: string | undefined){
    if (command != null) {
      this.cmdResponse = this.forkliftService.doStuff(command);
    }

    this.updateForkliftPosition(this.cmdResponse.x, this.cmdResponse.y);
  }

  getDirectionName(cmdResponse: CommandResponse): string {
    // todo:
    switch (cmdResponse?.direction) {
      case 0: return 'North';
      case 90: return 'East';
      case 180: return 'South';
      case 270: return 'West';
      default: return 'Unknown';
    }
    return 'Unknown';
  }

  private updateForkliftPosition(x:number, y:number): void {
    const pixelX = x * 50;
    const pixelY = (9 - y) * 50;
    this.forkliftTransform = `translate(${pixelX}px, ${pixelY}px)`;
  }

  gridItemClicked(square: any) {
    console.log(square)
    console.log(square?.x, square?.y)

  }

  logCoordinates(x: number, y: number) {
    console.log('x: ' + x)

  }
}


// TODO: move the movement logic into a service with unit tests
