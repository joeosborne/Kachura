import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelPicker2Component } from './wheel-picker2.component';

describe('WheelPicker2Component', () => {
  let component: WheelPicker2Component;
  let fixture: ComponentFixture<WheelPicker2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WheelPicker2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheelPicker2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
