import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkliftSimulatorComponent } from './forklift-simulator.component';

describe('ForkliftSimulatorComponent', () => {
  let component: ForkliftSimulatorComponent;
  let fixture: ComponentFixture<ForkliftSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForkliftSimulatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForkliftSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
