import { Component, OnInit } from '@angular/core';
import { Film, FilmDataService } from '../film-data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-select-film',
  standalone: true,
  imports: [SearchComponent, RouterLink],
  templateUrl: './select-film.component.html',
  styleUrl: './select-film.component.css',
})
export class SelectFilmComponent implements OnInit {
  films: Film[] = [];

  selectedFilm: Film | undefined; //todo: type
  selectedFilmTrailerId: any;
  selectedFilmImdbUrl: any;
  selectedRottenTomatoesUrl: any;
  categoryId: string | null;
  //filteredFilms: Film[] = [];

  constructor(
    private filmService: FilmDataService,
    public sanitizer: DomSanitizer,
    private route: ActivatedRoute,
  ) {
    this.loadFilms();
  }

  loadFilms(): void {
    this.filmService.getFilms().subscribe((data: Film[]) => {
      this.films = data;
      console.log('this.films..');
    });
  }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');
    if (!!this.categoryId) {
      console.log('categoryId: ' + this.categoryId);
    }
  }

  selectAList(number: number) {
    if (number === 1) {
      // todo: List
      // todo: add a list svc which has film ids and use this below..

      const rand = Math.floor(Math.random() * 11);
      console.log(rand)
      //console.log(this.films)
      this.selectedFilm = this.films.find(x=>x.id === rand+1)
    }
    else{
      this.selectedFilm = undefined;
    }
  }
}
