import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wheel-picker2',
  standalone: true,
  templateUrl: './wheel-picker2.component.html',
  styleUrls: ['./wheel-picker2.component.css']
})
export class WheelPicker2Component {
  @Input() options: string[] = [];
  @Output() selectionChange = new EventEmitter<number>();

  selectedIndex = 0;

  selectNext() {
    this.selectedIndex = (this.selectedIndex + 1) % this.options.length;
    this.selectionChange.emit(this.selectedIndex);
  }

  selectPrevious() {
    this.selectedIndex = (this.selectedIndex - 1 + this.options.length) % this.options.length;
    this.selectionChange.emit(this.selectedIndex);
  }
}
