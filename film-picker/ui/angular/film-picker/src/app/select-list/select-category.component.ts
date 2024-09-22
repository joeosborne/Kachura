import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {SelectionCategory} from "../model/selection.category";

@Component({
  selector: 'app-select-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.css',
})
export class SelectCategoryComponent {}
