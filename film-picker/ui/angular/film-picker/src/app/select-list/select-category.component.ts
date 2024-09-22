import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {SelectionCategory} from "../model/selection.category";

@Component({
  selector: 'app-select-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.css',
})
export class SelectCategoryComponent {
  constructor(private router: Router) {
  }
  selectCategory(number: number) {
    this.router.navigate([`select-film/${number}`])
  }
}
