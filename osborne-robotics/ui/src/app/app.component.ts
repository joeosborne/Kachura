import { Component } from '@angular/core';
import {ForkliftSimulatorComponent} from './forklift-simulator/forklift-simulator.component';
import {RouterLink, RouterOutlet} from '@angular/router';
// todo: renames chess, circle

@Component({
  selector: 'app-root',
  imports: [
    ForkliftSimulatorComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
}


// TODO: move the movement logic into a service with unit tests
