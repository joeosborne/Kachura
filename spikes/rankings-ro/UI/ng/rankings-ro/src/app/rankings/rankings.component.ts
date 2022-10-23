import { Component, OnInit } from '@angular/core';
import { RankingsDataService } from '../rankings-data-service';
import {WeightDivision} from "../model/weight-division";
import {Boxer} from "../model/boxer";

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css'],
})
export class RankingsComponent implements OnInit {
  weightDivisions: WeightDivision[] = [];
  currentWeightDivisionId: number = 2; // todo: HW
  private allBoxers: Boxer[] = [];
  currentBoxers: Boxer[] = []; // todo: rename
  constructor(private rankingsDataService: RankingsDataService) {}

  ngOnInit(): void {
    // todo: fork join
    this.rankingsDataService.getWeightDivisions().subscribe((data) => {
      this.weightDivisions = data;
    });
    this.rankingsDataService.getBoxers().subscribe((data) => {
      this.allBoxers = data;
      this.onWeightDivisionSelected(this.currentWeightDivisionId);
    });
  }

  onWeightDivisionSelected(weightDivisionId: number) {
    this.currentWeightDivisionId = weightDivisionId;
    console.log(this.currentWeightDivisionId);
    this.currentBoxers = this.allBoxers.filter(
      (x) => x.weightDivisionId === this.currentWeightDivisionId
    );
  }
}
