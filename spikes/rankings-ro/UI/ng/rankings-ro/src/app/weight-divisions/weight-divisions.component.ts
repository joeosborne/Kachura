import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {WeightDivision} from "../model/weight-division";

@Component({
  selector: 'app-weight-divisions',
  templateUrl: './weight-divisions.component.html',
  styleUrls: ['./weight-divisions.component.css'],
})
export class WeightDivisionsComponent implements OnInit {
  @Input() weightDivisions: WeightDivision[] = [];
  @Output() weightDivisionSelected = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onWeightDivisionSelected(w: WeightDivision) {
    console.log(w);
    this.weightDivisionSelected.emit(w.id);
  }
}
