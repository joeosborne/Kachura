import { Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {FindFilmComponent} from "./find-film/find-film.component";
import {SelectCategoryComponent} from "./select-list/select-category.component";
import {SelectFilmComponent} from "./select-film/select-film.component";
import {AdminComponent} from "./admin/admin.component";
import {ListComponent} from "./list/list.component";
import {FilmComponent} from "./film/film.component";

export const routes: Routes = [
  { path: '', component: SelectCategoryComponent },
  { path: 'select-category', component: SelectCategoryComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'find-film', component: FindFilmComponent },
  { path: 'select-film/:categoryId', component: SelectFilmComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'list/:listId', component: ListComponent },
  { path: 'film/:id', component: FilmComponent },

];
// todo: change default back to landing
