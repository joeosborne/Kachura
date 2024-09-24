import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-no-signals',
  standalone: true,
  imports: [],
  templateUrl: './counter-no-signals.component.html',
  styleUrl: './counter-no-signals.component.css'
})
export class CounterNoSignalsComponent {
  // A simple property to store the count state
  count = 0;

  // Method to increment the count
  increment() {
    this.count++;
  }

  // Method to decrement the count
  decrement() {
    this.count--;
  }
}
