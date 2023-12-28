import { Component } from '@angular/core';

export interface Category {
  id: number;
  title: string;
  description: string;

}

@Component({
  selector: 'mp-category-selector',
  standalone: true,
  imports: [],
  templateUrl: './category-selector.component.html',
  styleUrl: './category-selector.component.css',
})
export class CategorySelectorComponent {
  categories: Category[] = [
    {
      id: 1,
      title: '100 Rewatchables',
      description: '[description for 100 Rewatchables]'
    },
    {
      id: 2,
      title: '1970s',
      description: '[description for 1970s]'
    },
    {
      id: 3,
      title: '1990s',
      description: '[description for 1990s]'
    },

  ];
}
