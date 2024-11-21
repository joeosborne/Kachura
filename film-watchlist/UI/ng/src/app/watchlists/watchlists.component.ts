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
    debugger;
    this.watchlistService.getAllWatchlists().subscribe((watchlists) => {
      console.log(watchlists.items)
      console.log(watchlists.items.length)
     this.watchlists = watchlists.items;
    });
  }
}
