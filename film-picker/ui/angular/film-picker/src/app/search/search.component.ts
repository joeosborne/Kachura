import { Component } from '@angular/core';
import {JsonPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [JsonPipe, NgIf, NgForOf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  fakeData = [
    'Fight Club',
    'The Sixth Sense',
  ];
  results: string[] = [];

  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.results = this.fakeData.filter((item) =>
      item.toLowerCase().includes(query),
    );
  }
}
