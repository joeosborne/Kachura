import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe, NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { ForkliftSimulatorService } from '../forklift-simulator.service';
import { WarehouseGridCell } from '../model/warehouse-grid-cell';

export interface CommandInstruction {
  x: number;
  y: number;
  direction: number;
  actions: string[];
  collisionMsg?: string;
}

@Component({
  selector: 'app-forklift-simulator',
  imports: [
    RouterOutlet,
    FileUploadComponent,
    NgForOf,
    NgStyle,
    AgGridAngular,
    NgClass,
    JsonPipe,
    FormsModule,
    NgIf,
  ],
  templateUrl: './forklift-simulator.component.html',
  styleUrl: './forklift-simulator.component.css',
  standalone: true,
})
export class ForkliftSimulatorComponent implements OnInit {
  // TODO:

  // TODO:
  //F5R90F2 = {x: 2, y: 5}
  //R90F9L90F9B1 = {x: 9, y: 8}

  // this.obstacles = [
  //   { x: 2, y: 5 },
  //   { x: 9, y: 8 },
  // ];
  //
  // todo: move crossIndexes into svc - store with obstacle info
  crossIndex = 42; // Index where the cross will appear (row 3, column 5)
  crossIndex2 = 19; // Index where the cross will appear (row 3, column 5)

  // todo: de-dupe
  arrowIndex = 90; // Index where the cross will appear (row 3, column 5)

  warehouseGridCells: WarehouseGridCell[] = Array.from({ length: 100 });

  // todo: remove usage of forkliftTransform and describe the approach as a comment
  forkliftTransform = 'translate(0px, 0px)';
  commandInstruction = this.initCommandInstruction();
  command = '';
  errorMsg: string = '';

  constructor(private forkliftService: ForkliftSimulatorService) {}

  getGridPosition(cmd: CommandInstruction): number {
    // todo: 10
    console.log('x: ' + cmd.x + ' y: ' + cmd.y + ' gridWidth: ' + 10);
    if (cmd.x < 0 || cmd.y < 0 || cmd.x >= 10 || cmd.y >= 10) {
      throw new Error('x or y is out of bounds.');
    }

    // Calculate the 1-based position
    return (10 - cmd.y - 1) * 10 + cmd.x;
  }
  runCommand(command: string | undefined) {
    if (!!command) {
      this.errorMsg = '';
      this.commandInstruction = this.forkliftService.executeCommand(
        command,
        this.commandInstruction,
      );
    } //else{
    const commandCouldBeProcessed =
      this.commandInstruction.actions.length > 0 &&
      !this.commandInstruction.collisionMsg;

    if (commandCouldBeProcessed) {
      this.updateForkliftPosition(this.commandInstruction);

      this.arrowIndex = this.getGridPosition(this.commandInstruction);
      console.log('arrowIndex: ' + this.arrowIndex);
    } else {
      this.errorMsg = !!this.commandInstruction.collisionMsg
        ? this.commandInstruction.collisionMsg
        : 'Command could not be processed. Please ensure that you have entered a valid command.';
    }
  }

  getDirectionName(cmdResponse: CommandInstruction): string {
    // todo:
    switch (cmdResponse?.direction) {
      case 0:
        return 'North';
      case 90:
        return 'East';
      case 180:
        return 'South';
      case 270:
        return 'West';
      default:
        return 'Unknown';
    }
    return 'Unknown';
  }

  private updateForkliftPosition(cmdResponse: CommandInstruction): void {
    const pixelX = cmdResponse.x * 50;
    const pixelY = (9 - cmdResponse.y) * 50;
    const rotation = cmdResponse.direction % 360;
    this.forkliftTransform = `translate(${pixelX}px, ${pixelY}px) rotate(${rotation}deg)`;
  }

  resetCommand() {
    this.command = '';
    this.errorMsg = '';
    this.commandInstruction = this.initCommandInstruction();
    // todo: de-dupe
    this.arrowIndex = 90; // Index where the cross will appear (row 3, column 5)

    this.updateForkliftPosition(this.commandInstruction);
  }

  private initCommandInstruction(): CommandInstruction {
    return {
      x: 0,
      y: 0,
      direction: 0,
      actions: ([] = []),
    };
  }

  ngOnInit(): void {
    this.updateForkliftPosition(this.commandInstruction);
  }

  actionsCanBeDisplayed(): boolean {
    return (
      !this.errorMsg &&
      !!this.commandInstruction &&
      !!this.commandInstruction.actions &&
      !!this.commandInstruction.actions.length
    );
  }
}
