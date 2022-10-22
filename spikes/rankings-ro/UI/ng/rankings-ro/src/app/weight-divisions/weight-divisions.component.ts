import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weight-divisions',
  templateUrl: './weight-divisions.component.html',
  styleUrls: ['./weight-divisions.component.css']
})
export class WeightDivisionsComponent implements OnInit {
  @Input() weightDivisions: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
