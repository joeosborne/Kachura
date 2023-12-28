import { Injectable } from '@angular/core';

import { Movie } from './models/movie.model';
import { Category } from './models/category.model';

export interface MovieData {
  categories: Category[];
  movies: Movie[];
}

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  movieData: MovieData;
  // todo: move data to back end
  constructor() {
    this.movieData = this.loadMovieData();
  }

  private loadMovieData(): MovieData {
    const categories: Category[] = [
      {
        id: 1,
        title: '100 Rewatchables',
        description: '[description for 100 Rewatchables]',
      },
      {
        id: 2,
        title: '1970s',
        description: '[description for 1970s]',
      },
      {
        id: 3,
        title: '1990s',
        description: '[description for 1990s]',
      },
      {
        id: 4,
        title: 'test 100 Rewatchables',
        description: '[description for 100 Rewatchables]',
      },
      {
        id: 5,
        title: 'test 1970s',
        description: '[description for 1970s]',
      },
      {
        id: 6,
        title: 'test 1990s',
        description: '[description for 1990s]',
      },
    ];

    const movies: Movie[] = [
      {
        id: 1,
        title: 'Pulp Fiction',
        mainStars: ['Samuel L Jackson', 'John Travolta'],
        director: 'Quentin Tarantino',
        categories:[1, 3]
      },
      {
        id: 2,
        title: 'The Master',
        mainStars: ['Philip Seymour Hoffman', 'Joaquin Phoenix'],
        director: 'Paul Thomas Anderson',
        categories:[1, 3]
      },
    ];
    return { categories, movies };
  }
}
