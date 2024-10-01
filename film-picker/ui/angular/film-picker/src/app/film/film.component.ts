import {Component, OnInit} from '@angular/core';
import {FilmDataService} from "../film-data.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Film} from "../model/film.model";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [JsonPipe, RouterLink],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css',
})
export class FilmComponent implements OnInit {
  filmId: number;
  films: Film[] = [];
  selectedFilm: Film | undefined;

  constructor(
    private filmService: FilmDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loadFilmData();
  }



  loadFilmData(): void {
    this.filmService.getFilms().subscribe((data: Film[]) => {
      // todo: filter down to list
      this.films = data;
    });
  }

  ngOnInit(): void {
    this.filmId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('filmId...');
    console.log(this.filmId);
    this.selectedFilm = this.films.find((x) => x.id === this.filmId);
  }

  pickRandomFilm() {
    const rId = Math.floor(Math.random() * 19 + 1);
    console.log('rId: ' + rId);
    this.selectedFilm = this.films.find((x) => x.id === rId);

  }
}
