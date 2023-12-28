import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';
import {MovieDataService} from "../movie-data.service";
import {Movie} from "../models/movie.model";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'mp-category',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  movies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieDataService: MovieDataService) {}

  ngOnInit() {
    const catId = this.route.snapshot.paramMap.get('id');
    console.log('catId: ' + catId)
      const categories = this.movieDataService.movieData.categories;
      console.log(categories);

      this.movies = this.movieDataService.movieData.movies.filter((x) =>
        x.categories.some((c) => c.toString() === catId),
      );
      console.log('todo: show the following movies...');
      console.log(this.movies);
  }

  // ngOnInit() {
  //   this.categories = this.movieDataService.movieData.categories;
  //   console.log(this.categories);
  //
  //   const movies = this.movieDataService.movieData.movies.filter((x) =>
  //     x.categories.some((c) => c === category.id),
  //   );
  //   console.log('todo: show the following movies...');
  //   console.log(movies);
  // }


}
