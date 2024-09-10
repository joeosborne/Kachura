import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AutocompleteComponent} from "./autocomplete/autocomplete.component";
import {NgOptimizedImage} from "@angular/common";
import {LandingComponent} from "./landing/landing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AutocompleteComponent,
    NgOptimizedImage,
    LandingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'film-picker';
}
