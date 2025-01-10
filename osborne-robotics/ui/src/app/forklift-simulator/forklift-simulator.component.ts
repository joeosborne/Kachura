import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JsonPipe, NgClass, NgForOf, NgStyle} from '@angular/common';
import {AgGridAngular} from 'ag-grid-angular';
import {FormsModule} from '@angular/forms';
import {FileUploadComponent} from '../file-upload/file-upload.component';
import {GridItem} from '../grid-item';
import {ForkliftService} from '../forklift.service';

export interface CommandResponse {
  x: number,
  y: number, // Initial y-coordinate
  direction: number, // Initial direction in degrees
  command: string,
  actions: string[];
}

// todo: renames chess, circle
@Component({
  selector: 'app-forklift-simulator',
  imports: [RouterOutlet, FileUploadComponent, NgForOf, NgStyle, AgGridAngular, NgClass, JsonPipe, FormsModule],
  templateUrl: './forklift-simulator.component.html',
  styleUrl: './forklift-simulator.component.css',
  standalone: true,
})
export class ForkliftSimulatorComponent implements OnInit{
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
  command = '';
  constructor(private forkliftService: ForkliftService) {

  }


  runCommand(command: string | undefined){
    if (command != null) {
      this.cmdResponse = this.forkliftService.doStuff(command);
    }

    this.updateForkliftPosition(this.cmdResponse);
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

  private updateForkliftPosition(cmdResponse: CommandResponse): void {
    // const pixelX = x * 50;
    // const pixelY = (9 - y) * 50;
    // this.forkliftTransform = `translate(${pixelX}px, ${pixelY}px)`;


      const pixelX = cmdResponse.x * 50;
      const pixelY = (9 - cmdResponse.y) * 50;
      const rotation = cmdResponse.direction % 360;
      this.forkliftTransform = `translate(${pixelX}px, ${pixelY}px) rotate(${rotation}deg)`;

  }

  resetCommand() {
    console.log(this.command)
    this.command = '';
    // todo: dont init twice
    this.cmdResponse = {
      x: 0,
      y: 0,
      direction: 0,
      command: '',
      actions: [] = []
    }
    this.updateForkliftPosition(this.cmdResponse);
    console.log(this.command)

  }

  ngOnInit(): void {
    this.updateForkliftPosition(this.cmdResponse);
  }
}


// TODO: move the movement logic into a service with unit tests
