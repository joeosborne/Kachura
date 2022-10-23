import { Component, Input, OnInit } from '@angular/core';
import {Boxer} from "../model/boxer";

@Component({
  selector: 'app-boxers',
  templateUrl: './boxers.component.html',
  styleUrls: ['./boxers.component.css'],
})
export class BoxersComponent implements OnInit {
  @Input() boxers: Boxer[] = [];
  constructor() {}

  ngOnInit(): void {}
}
