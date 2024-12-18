import { Injectable, signal } from '@angular/core';
import { Film } from './model/film.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AddMovieToWatchlistDto} from './landing/landing.component';

export interface FilmDTO{
  id?:number;
  title: string;
  posterPath: string;
  overview: string;
  releaseDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  constructor(private http: HttpClient) {}
  watchlist = signal<any>({});

  // addToList(film: Film): void {
  //   const index = this.watchlist().movies.findIndex(
  //     (item: Film) => item.title === film.title
  //   );
  //   if (index === -1) {
  //     this.watchlist.update((items) => {
  //       let f = {
  //         id: 1,
  //         title: film.title,
  //         posterPath: film.poster_path,
  //         overview: film.overview,
  //         releaseDate: film.release_date,
  //       };
  //
  //       items.movies.push(f);
  //       return items;
  //     });
  //   } else {
  //     console.log('todo: handle this');
  //   }
  //
  //   this.http
  //     .put('http://localhost:5009/api/watchlist/999', this.watchlist())
  //     .subscribe((x) => {
  //       // todo: handle this
  //     });
  // }

  getAllWatchlists(): Observable<any> {
    return this.http.get<any>('http://localhost:5009/api/watchlist');
  }

  loadWatchlist(id: number): void {
    console.log('loadWatchlist|id: ' + id)
    this.http
      .get<any>('http://localhost:5009/api/watchlist/' + id)
      .subscribe((x) => {
        console.log(x)
        this.watchlist.set(x);
      });
  }

  addFilm(film: FilmDTO): Observable<FilmDTO>  {
    const apiUrl = 'http://localhost:5009/api/film';
    return this.http.post<FilmDTO>(apiUrl, film);
  }

  // addFilmToWatchlist(film: any) {
  //   http://localhost:5009/api/watchlist/4/movies
  // }

  addFilmToList(dto: AddMovieToWatchlistDto) : Observable<string>  {
    const apiUrl = 'http://localhost:5009/api/watchlist/4/movies';
    return this.http.post<string>(apiUrl, dto);
  }
}
