import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';
import { Category } from '../models/category.model';
import {Router, ActivatedRoute, ParamMap, RouterOutlet} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'mp-category-selector',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './category-selector.component.html',
  styleUrl: './category-selector.component.css',
})
export class CategorySelectorComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private movieDataService: MovieDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit() {
    this.categories = this.movieDataService.movieData.categories;
    console.log(this.categories);
  }

  onCategorySelected(category: Category) {
    console.log(category);

    this.router.navigate(['/category', { id: category.id }]);
    //this.router.navigate(['/category']);
  }
}
