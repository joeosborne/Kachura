import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-select-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './select-list.component.html',
  styleUrl: './select-list.component.css',
})
export class SelectListComponent {}
