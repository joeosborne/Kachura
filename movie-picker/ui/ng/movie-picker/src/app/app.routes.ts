import { Routes } from '@angular/router';
import {CategoryComponent} from "./category/category.component";
import {CategorySelectorComponent} from "./category-selector/category-selector.component";

export const routes: Routes = [
  { path: 'category-selector', component: CategorySelectorComponent },
  { path: '',   redirectTo: '/category-selector', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
];

// todo: add routing to support categories{catid} - when a category tile is selected
