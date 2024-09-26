// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class MovieService {
//
//   constructor() { }
// }

import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  year: number;
  runtime: string;
  genres: string[];
  director: string;
  writer: string;
  actors: string;
  plot: string;
  posterUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: Movie[] = [
    // Top 10 movies from the 1970s
    {
      id: 1,
      title: 'The Godfather',
      year: 1972,
      runtime: '175 min',
      genres: ['Crime', 'Drama'],
      director: 'Francis Ford Coppola',
      writer: 'Mario Puzo, Francis Ford Coppola',
      actors: 'Marlon Brando, Al Pacino, James Caan',
      plot: 'The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.',
      posterUrl: 'https://via.placeholder.com/200x300.png?text=The+Godfather',
    },
    // Add 9 more movies from 1970s...

    // Top 10 movies from the 1990s
    {
      id: 11,
      title: 'Pulp Fiction',
      year: 1994,
      runtime: '154 min',
      genres: ['Crime', 'Drama'],
      director: 'Quentin Tarantino',
      writer: 'Quentin Tarantino, Roger Avary',
      actors: 'John Travolta, Uma Thurman, Samuel L. Jackson',
      plot: 'The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.',
      posterUrl: 'https://via.placeholder.com/200x300.png?text=Pulp+Fiction',
    },
    // Add 9 more movies from 1990s...
  ];

  constructor() {}

  getMoviesByFilters(genre: string | null, decade: string | null): Movie[] {
    return this.movies.filter((movie) => {
      const genreMatch = genre ? movie.genres.includes(genre) : true;
      const decadeMatch = decade
        ? movie.year >= +decade && movie.year < +decade + 10
        : true;
      return genreMatch && decadeMatch;
    });
  }
}
