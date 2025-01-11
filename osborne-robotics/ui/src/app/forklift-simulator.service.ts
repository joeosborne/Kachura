import { Injectable } from '@angular/core';
import {GridItem} from './grid-item';
import {CommandInstruction} from './forklift-simulator/forklift-simulator.component';



interface Coords{
  x: number;
  y: number;
}

@Injectable({
  providedIn: 'root'
})
export class ForkliftSimulatorService {

  private obstacles: Coords[] = []

  constructor() {
    // TODO:
    //F5R90F2 = {x: 2, y: 5}
    //R90F9L90F9B1 = {x: 9, y: 8}

    this.obstacles =[{x: 2, y: 5}, {x: 9, y: 8}];
  }



  executeCommand(command: string, current: CommandInstruction):CommandInstruction{
    const cmdResponse: CommandInstruction = {
      x: current.x,
      y: current.y,
      direction: current.direction,
      actions: [] = []
    }

    const commands = command.match(/[A-Z][0-9]+/g) || [];

    commands.forEach(cmd => {
      const action = cmd[0];
      const value = parseInt(cmd.slice(1), 10);

      if (action === 'F') {
        this.moveForklift(value, cmdResponse, action);
        // cmdResponse.actions.push(`Move Forward by ${value} units.`);
      } else if (action === 'B') {
        this.moveForklift(-value, cmdResponse, action);
        //cmdResponse.actions.push(`Move Backward by ${value} units.`);
      } else if (action === 'L') {
        this.turnForklift(-value, cmdResponse, action);
        //cmdResponse.actions.push(`Turn Left by ${value} degrees.`);
      } else if (action === 'R') {
        this.turnForklift(value, cmdResponse, action);
        //cmdResponse.actions.push(`Turn Right by ${value} degrees.`);
      }
    });
    return cmdResponse;
  }

  private moveForklift(units: number, cmdResponse: CommandInstruction, action: string): void {
    // todo: improve this
    // const radians = (Math.PI / 180) * this.direction;
    // this.x += Math.round(Math.cos(radians) * units);
    // this.y += Math.round(Math.sin(radians) * units);

    // this.x += Math.round(Math.cos(radians) * units);
    // this.y += Math.round(Math.sin(radians) * units);

    console.log('in moveForklift')
    console.log('moveForklift:units: ' + units)

    switch (cmdResponse.direction) {
      case 0:
        cmdResponse.y += units;
        break;
      case 90:
        cmdResponse.x += units;
        break;
      case 180:
        cmdResponse.y -= units;
        break;
      case 270:
        cmdResponse.x -= units;
        break;
      default:
        break;
    }

    if (this.obstacles.some(obstacle => obstacle.x === cmdResponse.x && obstacle.y === cmdResponse.y)) {
      cmdResponse.collisionMsg ='Obstacle detected at ' + cmdResponse.x + ', ' + cmdResponse.y;
      // todo: maybe move to closest possible grid item that doesnt have an obstacle
    }


      // Clamp within grid bounds
      cmdResponse.x = Math.max(0, Math.min(9, cmdResponse.x));
      cmdResponse.y = Math.max(0, Math.min(9, cmdResponse.y));
      if (action === 'F') {
        cmdResponse.actions.push(`Move Forward by ${units} units.`);
      } else if (action === 'B') {
        cmdResponse.actions.push(`Move Backward by ${units} units.`);
      }





    // switch (action) {
    //   case 0:
    //     //cmdResponse.actions.push(`Move Forward by ${value} units.`);
    //     break;
    //   case 90:
    //     cmdResponse.x += units;
    //     break;
    //   case 180:
    //     cmdResponse.y -= units;
    //     break;
    //   case 270:
    //     cmdResponse.x -= units;
    //     break;
    //   default:
    //     break;
    // }


    console.log('x: ' + cmdResponse.x)
    console.log('y: ' + cmdResponse.y)
  }

  private turnForklift(degrees: number, cmdResponse: CommandInstruction, action: string): void {
    cmdResponse.direction = (cmdResponse.direction + degrees + 360) % 360;

    if (action === 'L') {
      cmdResponse.actions.push(`Turn Left by ${degrees} degrees.`);
    } else if (action === 'R') {
      cmdResponse.actions.push(`Turn Right by ${degrees} degrees.`);
    }
  }

}
