import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRBLComponent } from './top-rbl.component';

describe('TopRBLComponent', () => {
  let component: TopRBLComponent;
  let fixture: ComponentFixture<TopRBLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRBLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRBLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
