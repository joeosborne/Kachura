import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BoxerDataService } from '../../boxer-data.service';

@Component({
  selector: 'app-edit-rankings',
  templateUrl: './edit-rankings.component.html',
  styleUrls: ['./edit-rankings.component.css'],
})
export class EditRankingsComponent implements OnInit {
  // todo: default to P4P
  private boxers: any[] = [];
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

  onWeightSelected(weightId: number) {
    this.selectedWeightId = this.weights.find((x) => x.id === weightId).id;
    this.boxersAtSelectedWeight = this.boxers.filter(
      (x) => x.weightId === this.selectedWeightId
    );
  }

  // drop(event: CdkDragDrop<{title: string; poster: string}[]>) {
  drop(event: any) {
    // console.log(event)
    // console.log(event.previousIndex)
    // console.log(event.currentIndex)
    //
    // const previousRanking = event.previousIndex + 1;
    //
    // const selectedBoxer = this.boxersAtSelectedWeight.find(x => x.ranking === previousRanking);
    // const currentRanking = event.currentIndex + 1;
    // console.log('selectedBoxer...');
    // console.log(selectedBoxer);
    //
    // console.log('previous Ranking: ' + previousRanking)
    // console.log('new Ranking: ' + currentRanking)


      console.log('before this.boxersAtSelectedWeight...');
      console.log(this.boxersAtSelectedWeight);

    moveItemInArray(this.boxersAtSelectedWeight, event.previousIndex, event.currentIndex);
    console.log('after this.boxersAtSelectedWeight...');
    console.log(this.boxersAtSelectedWeight);
    // todo: re-assign all rankings accordingly. NOTE: at this stage, the this.boxersAtSelectedWeight are ordered by new rankings
    // console.log('selectedBoxer...');
    // console.log(selectedBoxer);
    // if(!!selectedBoxer) {
    //   selectedBoxer.ranking = currentRanking
    //   console.log('updated selectedBoxer...');
    //   console.log(selectedBoxer);
    // }
  }

  getBoxerImage(boxerId: number): string {
    return `../../assets/img/boxer-${boxerId}.jpg`;
  }
}
