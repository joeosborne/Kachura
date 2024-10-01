import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { FilmDataService } from '../film-data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Film } from '../model/film.model';
import { List } from '../model/film-list.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  listId: string | null;
  films: Film[] = [];
  selectedFilm: Film;

  constructor(
    private filmService: FilmDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    //this.loadFilmData();
  }


  loadFilmData(): void {
    this.filmService.getFilms().subscribe((data: Film[]) => {
      // todo: filter down to list
      this.films = data;
    });
  }

  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get('listId');
    console.log('listId...');
    console.log(this.listId);
  }

  pickRandomFilm() {
    // todo: List
    // todo: add a list svc which has film ids and use this below..

    //      console.log(Math.floor(Math.random() * 19 + 1))
    const rId = Math.floor(Math.random() * 19 + 1);
    console.log('rId: ' + rId);
    this.router.navigate([`film/${rId}`])
    // const randomFilm = this.films.find((x) => x.id === Math.floor(rId));
    // console.log(randomFilm);
    // if (!!randomFilm) {
    //   this.selectedFilm = randomFilm;
    //   console.log('this.selectedFilm: ' + this.selectedFilm.id);
    // }
  }
}
