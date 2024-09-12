import {Component, OnInit} from '@angular/core';
import { SearchComponent } from '../search/search.component';
import {Film, FilmDataService} from "../film-data.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-find-film',
  standalone: true,
  imports: [SearchComponent, NgIf, NgForOf],
  templateUrl: './find-film.component.html',
  styleUrl: './find-film.component.css',
})
export class FindFilmComponent implements OnInit {
  films: Film[] = [];

  constructor(private filmService: FilmDataService) {}

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms(): void {
    this.filmService.getFilms().subscribe((data: Film[]) => {
      this.films = data;
      console.log(this.films);
    });
  }
}
