import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SimpleService} from "../simple.service";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() label = '';

  @Output() click = new EventEmitter();
  numberFromSvc = 0;

  constructor(private simpleService: SimpleService) { }

  ngOnInit(): void {
  }

    onBtnClick($event: MouseEvent) {
      console.log($event)
      this.numberFromSvc = this.simpleService.getANumber();
      this.click.emit($event)

    }
}

