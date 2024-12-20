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

  addFilmToList(dto: AddMovieToWatchlistDto) : Observable<string>  {
    const apiUrl = 'http://localhost:5009/api/watchlist/4/movies';
    return this.http.post<string>(apiUrl, dto);
  }

  removeFilmFromList(dto: AddMovieToWatchlistDto) : Observable<any>  {
    const apiUrl = 'http://localhost:5009/api/watchlist/4/movies';
    //return this.http.delete<string>(apiUrl, dto);
    return this.http.delete(apiUrl, {  body: dto });
  }

}
