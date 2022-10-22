import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxersComponent } from './boxers.component';

describe('BoxersComponent', () => {
  let component: BoxersComponent;
  let fixture: ComponentFixture<BoxersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
