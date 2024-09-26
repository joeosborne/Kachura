import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  genres: string[] = ['Crime', 'Drama', 'Action', 'Comedy', 'Thriller', 'Romance'];
  decades: string[] = ['1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'];

  selectedGenre: string | null = null;
  selectedDecade: string | null = null;

  constructor(private movieService: MovieService, private router: Router) {}

  randomizeMovie() {
    const movies = this.movieService.getMoviesByFilters(
      this.selectedGenre,
      this.selectedDecade
    );
    console.log('movies...')
    console.log(movies)
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      console.log('randomIndex...')
      console.log(randomIndex)
      const randomMovie = movies[randomIndex];
      console.log('randomMovie...')
      console.log(randomMovie)
      this.router.navigate(['/movie', randomMovie.id]);
    }
  }
}
