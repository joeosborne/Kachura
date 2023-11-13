import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritableSignalsComponent } from './writable-signals.component';

describe('WritableSignalsComponent', () => {
  let component: WritableSignalsComponent;
  let fixture: ComponentFixture<WritableSignalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [WritableSignalsComponent]
});
    fixture = TestBed.createComponent(WritableSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
