import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
})
export class AppComponent {}

/* todo:
consts
add global error handling
svc intercepting - comments about auth etc
describe obstacles and add a todo to make them dynamic or configuravle
logging


 */
