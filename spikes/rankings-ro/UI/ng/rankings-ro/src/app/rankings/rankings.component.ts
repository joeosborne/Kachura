import { Component, OnInit } from '@angular/core';
import { RankingsDataService } from '../rankings-data-service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css'],
})
export class RankingsComponent implements OnInit {
  weightDivisions: any[] = [];
  currentWeightDivisionId: number = 2; // todo: HW
  private allBoxers: any[] = [];
  currentBoxers: any[] = [];// todo: rename
  constructor(private rankingsDataService: RankingsDataService) {}

  ngOnInit(): void {
    // todo: fork join
    this.rankingsDataService.getWeightDivisions().subscribe((data) => {
      this.weightDivisions = data;
    });
    this.rankingsDataService.getBoxers().subscribe((data) => {
      this.allBoxers = data;
      this.onWeightDivisionSelected(this.currentWeightDivisionId)
    });
  }

  onWeightDivisionSelected(weightDivisionId: number) {
    this.currentWeightDivisionId = weightDivisionId;
    console.log(this.currentWeightDivisionId)
    this.currentBoxers = this.allBoxers.filter(x=>x.weightDivisionId === this.currentWeightDivisionId)
  }
}
