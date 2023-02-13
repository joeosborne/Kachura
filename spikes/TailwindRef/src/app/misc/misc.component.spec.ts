import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscComponent } from './misc.component';

describe('MiscComponent', () => {
  let component: MiscComponent;
  let fixture: ComponentFixture<MiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
