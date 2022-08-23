import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneExampleComponent } from './standalone-example.component';

describe('StandaloneExampleComponent', () => {
  let component: StandaloneExampleComponent;
  let fixture: ComponentFixture<StandaloneExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
