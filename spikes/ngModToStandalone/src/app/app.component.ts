import {Component, OnInit} from '@angular/core';
import {DataSpinService} from "../data-spin.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngModToStandalone';

  constructor(private spinSvc:DataSpinService) {

  }

  ngOnInit(): void {
    console.log(this.spinSvc.getStuff())
  }


}
