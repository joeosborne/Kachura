import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MovieComponent,
    NavigationComponent,
    CategorySelectorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'movie-picker';
}

/* todo:
For now, add media query for mobile first
Add css variables
PWA




 */
