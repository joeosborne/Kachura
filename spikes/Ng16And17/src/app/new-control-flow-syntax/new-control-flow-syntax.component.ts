import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-new-control-flow-syntax',
  templateUrl: './new-control-flow-syntax.component.html',
  styleUrls: ['./new-control-flow-syntax.component.css'],
  standalone: true,
  imports: [
    NgIf
  ]
})
export class NewControlFlowSyntaxComponent {
  loggedIn = false;
  products: any[] = [];

  constructor(){
    this.products = [{
      title: 'title 1',
      description: 'description 2',
      price: 10
    },
    {
      title: 'title 1',
      description: 'description 2',
      price: 10
    }
    ]

  }


}
