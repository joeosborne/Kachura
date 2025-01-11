import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JsonPipe, NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {AgGridAngular} from 'ag-grid-angular';
import {FormsModule} from '@angular/forms';
import {FileUploadComponent} from '../file-upload/file-upload.component';
import {GridItem} from '../grid-item';
import {ForkliftSimulatorService} from '../forklift-simulator.service';

export interface CommandInstruction {
  x: number,
  y: number,
  direction: number,
  actions: string[];
  collisionMsg?: string;
}

// todo: renames chess, circle
@Component({
  selector: 'app-forklift-simulator',
  imports: [RouterOutlet, FileUploadComponent, NgForOf, NgStyle, AgGridAngular, NgClass, JsonPipe, FormsModule, NgIf],
  templateUrl: './forklift-simulator.component.html',
  styleUrl: './forklift-simulator.component.css',
  standalone: true,
})
export class ForkliftSimulatorComponent implements OnInit{
 squares: GridItem[] = Array.from({ length: 100 });
  forkliftTransform = 'translate(0px, 0px)';
  // todo: dont init twice.
  // todo: rename
  cmdResponse = this.initCommandResponse();
  command = '';
  errorMsg: string = '';

  constructor(private forkliftService: ForkliftSimulatorService) {

  }


  runCommand(command: string | undefined){
    console.log('command')
    console.log(command)
    console.log('this.cmdResponse BEFORE calling doStuff...')
    console.log(this.cmdResponse)
    //debugger;
    if (!!command) {
      this.errorMsg = '';
      this.cmdResponse = this.forkliftService.executeCommand(command, this.cmdResponse);
    } //else{
    console.log('this.cmdResponse')
    console.log(this.cmdResponse)

    debugger;
    const commandCouldBeProcessed = this.cmdResponse.actions.length > 0 && !this.cmdResponse.collisionMsg;

    if (commandCouldBeProcessed) {
      this.updateForkliftPosition(this.cmdResponse);
    }
    else{
      this.errorMsg = !!this.cmdResponse.collisionMsg ?  this.cmdResponse.collisionMsg :  'Command could not be processed. Please ensure that you have entered a valid command.';
    }

  }

  getDirectionName(cmdResponse: CommandInstruction): string {
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

  private updateForkliftPosition(cmdResponse: CommandInstruction): void {
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
    this.errorMsg = '';
    // todo: dont init twice
    this.cmdResponse = this.initCommandResponse();
    this.updateForkliftPosition(this.cmdResponse);
    console.log(this.command)

  }

  private initCommandResponse():CommandInstruction {
    return {
      x: 0,
      y: 0,
      direction: 0,
      actions: [] = []
    }
  }

  ngOnInit(): void {
    this.updateForkliftPosition(this.cmdResponse);
  }
}


// TODO: move the movement logic into a service with unit tests
