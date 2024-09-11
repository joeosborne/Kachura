import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFilmComponent } from './find-film.component';

describe('FindFilmComponent', () => {
  let component: FindFilmComponent;
  let fixture: ComponentFixture<FindFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindFilmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
