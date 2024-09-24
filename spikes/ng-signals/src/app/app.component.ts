import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CounterSignalsComponent} from "../counter-signals/counter-signals.component";
import {CounterNoSignalsComponent} from "../counter-no-signals/counter-no-signals.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterSignalsComponent, CounterNoSignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-change-detection';
}
