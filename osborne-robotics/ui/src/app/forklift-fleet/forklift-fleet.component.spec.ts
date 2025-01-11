import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkliftFleetComponent } from './forklift-fleet.component';

describe('ForkliftFleetComponent', () => {
  let component: ForkliftFleetComponent;
  let fixture: ComponentFixture<ForkliftFleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForkliftFleetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForkliftFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
