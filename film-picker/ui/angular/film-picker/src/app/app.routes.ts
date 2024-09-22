import { Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {FindFilmComponent} from "./find-film/find-film.component";
import {SelectCategoryComponent} from "./select-list/select-category.component";
import {SelectFilmComponent} from "./select-film/select-film.component";

export const routes: Routes = [
  { path: '', component: SelectCategoryComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'find-film', component: FindFilmComponent },
  { path: 'select-film/:categoryId', component: SelectFilmComponent },

];
// todo: change default back to landing
