// import { TestBed } from '@angular/core/testing';
//
// import { ForkliftService } from './forklift.service';
//
// describe('ForkliftService', () => {
//   let service: ForkliftService;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(ForkliftService);
//   });
//
//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
//
//
import { TestBed } from '@angular/core/testing';
import { ForkliftSimulatorService } from './forklift-simulator.service';
import { CommandResponse } from './app.component';

describe('ForkliftService', () => {
  let service: ForkliftSimulatorService;


  // todo: update or remove
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForkliftSimulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should move forward correctly', () => {
    const command = 'F9';
    const response: CommandResponse = service.executeCommand(command);
    expect(response.x).toBe(0);
    expect(response.y).toBe(9);
    expect(response.actions).toContain('Move Forward by 9 units.');
  });

  // it('should move backward correctly', () => {
  //   const command = 'B5';
  //   const response: CommandResponse = service.doStuff(command);
  //   expect(response.x).toBe(0);
  //   expect(response.y).toBe(-5);
  //   expect(response.actions).toContain('Move Backward by 5 units.');
  // });

  it('should turn left correctly', () => {
    const command = 'L90';
    const response: CommandResponse = service.executeCommand(command);
    expect(response.direction).toBe(270);
    expect(response.actions).toContain('Turn Left by 90 degrees.');
  });

  it('should turn right correctly', () => {
    const command = 'R90';
    const response: CommandResponse = service.executeCommand(command);
    expect(response.direction).toBe(90);
    expect(response.actions).toContain('Turn Right by 90 degrees.');
  });

  it('should handle multiple commands correctly', () => {
    const command = 'F9R90F5';
    const response: CommandResponse = service.executeCommand(command);
    expect(response.x).toBe(5);
    expect(response.y).toBe(9);
    expect(response.direction).toBe(90);
    expect(response.actions).toEqual([
      'Move Forward by 9 units.',
      'Turn Right by 90 degrees.',
      'Move Forward by 5 units.'
    ]);
  });
});
