import { Component, inject } from '@angular/core';
import { WatchlistService } from '../watchlist.service';
import { JsonPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [NgIf, NgForOf, JsonPipe],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css',
})
export class WatchlistComponent {
  watchlistService = inject(WatchlistService);
  listItems = this.watchlistService.listItems;
}
