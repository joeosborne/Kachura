// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-movie',
//   standalone: true,
//   imports: [],
//   templateUrl: './movie.component.html',
//   styleUrl: './movie.component.css'
// })
// export class MovieComponent {
//
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService, Movie } from '../movie.service';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movie = this.movieService.getMoviesByFilters(null, null).find((m) => m.id === +id);
    }
  }
}
