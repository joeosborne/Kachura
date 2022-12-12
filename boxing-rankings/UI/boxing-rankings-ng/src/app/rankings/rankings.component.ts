import { Component, OnInit } from '@angular/core';
import { BoxerDataService } from '../boxer-data.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css'],
})
export class RankingsComponent implements OnInit {
  boxers: any[] = [];
  weights: any[] = [];
  selectedWeightId: number = 0; // todo: 0 = pound 4 pound
  boxersAtSelectedWeight: any[] = [];

  constructor(private boxerDataService: BoxerDataService) {}

  // todo: extract p4p entries - tbd

  ngOnInit(): void {
    this.boxerDataService.getBoxers().subscribe((data) => {
      this.boxers = data;
    });

    this.boxerDataService.getWeights().subscribe((data) => {
      this.weights = data;
    });
  }

  onWeightSelected(weightDivisionId: number) {
    debugger;
    this.selectedWeightId = this.weights.find((x) => x.id === weightDivisionId).id;
    this.boxersAtSelectedWeight = this.boxers.filter(x=>x.weightDivisionId === this.selectedWeightId)
  }
}
