import { Component, OnInit } from '@angular/core';
import { RankingsDataService } from '../rankings-data-service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css'],
})
export class RankingsComponent implements OnInit {
  weightDivisions: any[] = [];
  constructor(private rankingsDataService: RankingsDataService) {}

  ngOnInit(): void {
    this.rankingsDataService.getWeightDivisions().subscribe((data) => {
      this.weightDivisions = data;
    });
  }
}
