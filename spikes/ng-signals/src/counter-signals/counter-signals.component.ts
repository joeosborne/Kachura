import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-counter-signals',
  standalone: true,
  imports: [],
  templateUrl: './counter-signals.component.html',
  styleUrl: './counter-signals.component.css'
})
export class CounterSignalsComponent {
  // Defining a signal to store count state
  count = signal(0);  // Initial value is 0

  // Define an effect to log whenever the count changes
  constructor() {
    effect(() => {
      console.log(`Count changed: ${this.count()}`);
    });
  }

  // Method to increment the count
  increment() {
    this.count.set(this.count() + 1);
  }

  // Method to decrement the count
  decrement() {
    this.count.set(this.count() - 1);
  }
}
