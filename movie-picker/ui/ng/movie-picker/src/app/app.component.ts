import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MovieComponent} from "./movie/movie.component";
import {CategorySelectorComponent} from "./category-selector/category-selector.component";
import {NavigationComponent} from "./navigation/navigation.component";

export interface Movie {
  id: number;
  title: string;
  mainStars?: string[];
  director?: string;
  lastWatched?: Date;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, CategorySelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'movie-picker';

  // todo: move back to api
  movies: Movie[] = [
    {
      id: 1,
      title: 'Pulp Fiction',
      mainStars: ['Samuel L Jackson', 'John Travolta'],
      director: 'Quentin Tarantino',
    },
    {
      id: 2,
      title: 'The Master',
      mainStars: ['Philip Seymour Hoffman', 'Joaquin Phoenix'],
      director: 'Paul Thomas Anderson',
    },
  ];
}

/* todo:
For now, add media query for mobile first
Add css variables
PWA




 */
