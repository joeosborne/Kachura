import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-roulette-wheel',
  standalone: true,
  templateUrl: './roulette-wheel.component.html',
  imports: [NgForOf],
  styleUrls: ['./roulette-wheel.component.css'],
})
export class RouletteWheelComponent {
  @Input() options: string[] = [];
  @Output() selectionChange = new EventEmitter<number>();

  selectedIndex = 0;

  spinWheel() {
    const randomIndex = Math.floor(Math.random() * this.options.length);
    this.selectedIndex = randomIndex;
    this.selectionChange.emit(this.selectedIndex);
  }
}
