import { Component } from '@angular/core';
import {SearchComponent} from "../search/search.component";

@Component({
  selector: 'app-find-film',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './find-film.component.html',
  styleUrl: './find-film.component.css',
})
export class FindFilmComponent {}
