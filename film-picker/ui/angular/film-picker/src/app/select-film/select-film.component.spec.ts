import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFilmComponent } from './select-film.component';

describe('SelectFilmComponent', () => {
  let component: SelectFilmComponent;
  let fixture: ComponentFixture<SelectFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectFilmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
