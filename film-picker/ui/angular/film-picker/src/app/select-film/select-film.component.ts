import { Component, OnInit } from '@angular/core';
import { FilmDataService } from '../film-data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { JsonPipe } from '@angular/common';
import {Film} from "../model/film.model";
import {List} from "../model/film-list.model";

@Component({
  selector: 'app-select-film',
  standalone: true,
  imports: [SearchComponent, RouterLink, JsonPipe],
  templateUrl: './select-film.component.html',
  styleUrl: './select-film.component.css',
})
export class SelectFilmComponent implements OnInit {
  films: Film[] = [];

  selectedFilm: Film | null; //todo: type
  selectedFilmTrailerId: any;
  selectedFilmImdbUrl: any;
  selectedRottenTomatoesUrl: any;
  categoryId: string | null;
  //filteredFilms: Film[] = [];
  lists: List[] = [];

  constructor(
    private filmService: FilmDataService,
    public sanitizer: DomSanitizer,
    private route: ActivatedRoute,
  ) {
    this.loadFilmData();
  }

  loadFilmData(): void {
    this.filmService.getFilms().subscribe((data: Film[]) => {
      this.films = data;
    });

    this.filmService.getLists().subscribe((data: List[]) => {
      this.lists = data;
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

//      console.log(Math.floor(Math.random() * 19 + 1))
      const rId = Math.random() * 19 + 1;
      console.log('rId: ' + rId)
      const randomFilm = this.films.find(
        (x) => x.id === Math.floor(rId),
      );
      console.log(randomFilm)
      if (!!randomFilm) {
        this.selectedFilm = randomFilm;
        console.log('this.selectedFilm: ' + this.selectedFilm.id)
       }
    } else {
      this.selectedFilm = null;
    }
  }
}
