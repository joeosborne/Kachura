import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'mp-category-selector',
  standalone: true,
  imports: [],
  templateUrl: './category-selector.component.html',
  styleUrl: './category-selector.component.css',
})
export class CategorySelectorComponent implements OnInit {
  categories: Category[] = [];

  constructor(private movieDataService: MovieDataService) {}
  ngOnInit() {
    this.categories = this.movieDataService.movieData.categories;
    console.log(this.categories);
  }

  onCategorySelected(category: Category)
  {
    console.log(category)
    const movies = this.movieDataService.movieData.movies.filter(x=>x.categories.some(c=>c === category.id))
    console.log('todo: show the following movies...')
    console.log(movies)

  }
}
