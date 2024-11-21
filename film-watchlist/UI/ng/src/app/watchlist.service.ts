import { Injectable, signal } from '@angular/core';
import { Film } from './model/film.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  constructor(private http: HttpClient) {}
  watchlist = signal<any>({});

  addToList(film: Film): void {
    const index = this.watchlist().movies.findIndex(
      (item: Film) => item.title === film.title
    );
    if (index === -1) {
      this.watchlist.update((items) => {
        let f = {
          id: 1,
          title: film.title,
          posterPath: film.poster_path,
          overview: film.overview,
          releaseDate: film.release_date,
        };

        items.movies.push(f);
        return items;
      });
    } else {
      console.log('todo: handle this');
    }

    this.http
      .put('http://localhost:5009/api/watchlist/999', this.watchlist())
      .subscribe((x) => {
        // todo: handle this
      });
  }

  getAllWatchlists(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5009/api/watchlist');
  }
  getWatchlist() {
    //const apiUrl = `${this.urlPrefixAdmin}GetAllUserGroupUsers/${id}`;
    this.http
      .get<any>('http://localhost:5009/api/watchlist/999')
      .subscribe((x) => {
        //console.log(x)
        //this.watchlist = x;
        this.watchlist.set(x);
        //console.log(this.watchlist())
      });
  }
}
