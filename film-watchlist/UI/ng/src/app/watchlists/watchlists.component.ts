import {Component, inject, OnInit} from '@angular/core';
import {WatchlistService} from '../watchlist.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-watchlists',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './watchlists.component.html',
  styleUrl: './watchlists.component.css',
})
export class WatchlistsComponent implements OnInit {
  watchlists: any[] = [];
  constructor(private watchlistService: WatchlistService) {}

  ngOnInit() {
    // call this.watchlistService.getAllWatchlists(); and store the result in a variable

    this.watchlistService.getAllWatchlists().subscribe((watchlists) => {
      // {
      //   "id": 4,
      //   "name": "1999",
      //   "description": "Films from the year 1999",
      //   "watchlistMovies": []
      // }


      console.log(watchlists)
     this.watchlists = watchlists;
    });
  }
}
