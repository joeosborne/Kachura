import { Injectable } from '@angular/core';
import {GridItem} from './grid-item';
import {CommandResponse} from './forklift-simulator/forklift-simulator.component';



interface Coords{
  x: number;
  y: number;
}

@Injectable({
  providedIn: 'root'
})
export class ForkliftService {

  private obstacles: Coords[] = []

  constructor() {
    this.obstacles =[{x: 2, y: 5}, {x: 3, y: 1}];
  }



  doStuff(command: string):CommandResponse{


    const cmdResponse: CommandResponse = {
      x: 0,
      y: 0,
      direction: 0,
      command: '',
      actions: [] = []
    }

    const commands = command.match(/[A-Z][0-9]+/g) || [];

    commands.forEach(cmd => {
      const action = cmd[0];
      const value = parseInt(cmd.slice(1), 10);

      if (action === 'F') {
        this.moveForklift(value, cmdResponse);
        cmdResponse.actions.push(`Move Forward by ${value} units.`);
      } else if (action === 'B') {
        this.moveForklift(-value, cmdResponse);
        cmdResponse.actions.push(`Move Backward by ${value} units.`);
      } else if (action === 'L') {
        this.turnForklift(-value, cmdResponse);
        cmdResponse.actions.push(`Turn Left by ${value} degrees.`);
      } else if (action === 'R') {
        this.turnForklift(value, cmdResponse);
        cmdResponse.actions.push(`Turn Right by ${value} degrees.`);
      }
    });
    return cmdResponse;
  }

  private moveForklift(units: number, cmdResponse: CommandResponse ): void {
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
      alert('Obstacle detected at ' + cmdResponse.x + ', ' + cmdResponse.y);
      cmdResponse.x = 0;
      cmdResponse.y = 0;
    }else{
      // Clamp within grid bounds
      cmdResponse.x = Math.max(0, Math.min(9, cmdResponse.x));
      cmdResponse.y = Math.max(0, Math.min(9, cmdResponse.y));
    }

    console.log('x: ' + cmdResponse.x)
    console.log('y: ' + cmdResponse.y)
  }

  private turnForklift(degrees: number, cmdResponse: CommandResponse): void {
    cmdResponse.direction = (cmdResponse.direction + degrees + 360) % 360;
  }

}
