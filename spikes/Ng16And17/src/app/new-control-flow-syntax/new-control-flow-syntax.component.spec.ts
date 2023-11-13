import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewControlFlowSyntaxComponent } from './new-control-flow-syntax.component';

describe('NewControlFlowSyntaxComponent', () => {
  let component: NewControlFlowSyntaxComponent;
  let fixture: ComponentFixture<NewControlFlowSyntaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewControlFlowSyntaxComponent]
    });
    fixture = TestBed.createComponent(NewControlFlowSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
