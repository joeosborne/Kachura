import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-weight-divisions',
  templateUrl: './weight-divisions.component.html',
  styleUrls: ['./weight-divisions.component.css']
})
export class WeightDivisionsComponent implements OnInit {
  @Input() weightDivisions: any[] = [];
  @Output() weightDivisionSelected = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  onWeightDivisionSelected(w: any) {
    console.log(w)
    this.weightDivisionSelected.emit(w.id)

  }
}
