import { Component, inject } from '@angular/core';
import { WatchlistService } from '../watchlist.service';
import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import {AddMovieToWatchlistDto} from '../landing/landing.component';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [NgIf, NgForOf, JsonPipe],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css',
})
export class WatchlistComponent {
  IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  watchlistService = inject(WatchlistService);
  watchlist = this.watchlistService.watchlist;

  removeFromList(film:any) {
    console.log('todo: remove film')
    console.log(film)

    let dto: AddMovieToWatchlistDto = {
      movieId: film.id
    };

    this.watchlistService.removeFilmFromList(dto).subscribe((newFilm) => {
      console.log(newFilm);
      this.watchlistService.loadWatchlist(4);
    });

  }
}
