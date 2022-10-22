import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-boxers',
  templateUrl: './boxers.component.html',
  styleUrls: ['./boxers.component.css']
})
export class BoxersComponent implements OnInit {
  @Input() boxers: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
