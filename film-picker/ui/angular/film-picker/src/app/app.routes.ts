import { Routes } from '@angular/router';
import { WheelPickerComponent } from './wheel-picker/wheel-picker.component';
import {LandingComponent} from "./landing/landing.component";
import {FindFilmComponent} from "./find-film/find-film.component";

export const routes: Routes = [
  { path: '', component: WheelPickerComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'wheel-picker', component: WheelPickerComponent },
  { path: 'find-film', component: FindFilmComponent },
];
// todo: change default back to landing
