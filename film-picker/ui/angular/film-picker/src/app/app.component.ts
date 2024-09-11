import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {AutocompleteComponent} from "./autocomplete/autocomplete.component";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {LandingComponent} from "./landing/landing.component";
import {WheelPickerComponent} from "./wheel-picker/wheel-picker.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AutocompleteComponent,
    NgOptimizedImage,
    LandingComponent,
    WheelPickerComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'film-picker';
}


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'routing-app';
// }
