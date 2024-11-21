import { Routes } from '@angular/router';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { LandingComponent } from './landing/landing.component';
import {WatchlistsComponent} from './watchlists/watchlists.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: LandingComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'watchlists', component: WatchlistsComponent },


  // { path: 'find-film', component: FindFilmComponent },
  // { path: 'select-film/:categoryId', component: SelectFilmComponent },
  // { path: 'admin', component: AdminComponent },
  // { path: 'list/:listId', component: ListComponent },
  // { path: 'film/:id', component: FilmComponent },
];
// todo: change default back to landing
