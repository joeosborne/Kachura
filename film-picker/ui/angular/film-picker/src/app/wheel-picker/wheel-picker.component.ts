import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouletteWheelComponent } from '../roulette-wheel/roulette-wheel.component';
import { Film, FilmDataService } from '../film-data.service';
import {JsonPipe, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-wheel-picker',
  standalone: true,
  imports: [RouletteWheelComponent, JsonPipe, NgIf, RouterLink],
  templateUrl: './wheel-picker.component.html',
  styleUrl: './wheel-picker.component.css',
})
export class WheelPickerComponent implements OnInit, AfterViewInit {
  films: Film[] = [];

  selectedFilm: Film | undefined; //todo: type
  selectedFilmTrailerId = 'https://www.youtube.com/embed/lXO0he1WjYw'

  constructor(private filmService: FilmDataService) {
    this.loadFilms();
  }

  loadFilms(): void {
    this.filmService.getFilms().subscribe((data: Film[]) => {
      this.films = data;
      console.log('this.films..');
      console.log(this.films);
      this.options = this.films.map((x) => x.title);
      this.arc = Math.PI / (this.options.length / 2);
      console.log('this.options..');
      console.log(this.options);
    });
  }

  canvas: any; //ElementRef<HTMLCanvasElement>;
  // todo: phase out this init of options.
  //options: string[] = ["$100", "$10", "$25", "$250", "$30", "$1000", "$1", "$200", "$45", "$500"];
  options: string[] = [];
  startAngle = 0;
  private arc: number;
  spinTimeout: any = null;
  spinArcStart = 10;
  spinTime = 0;
  spinTimeTotal = 0;
  ctx: CanvasRenderingContext2D;

  ngAfterViewInit() {
    console.log('in afterv viw');
    this.afterViewInit();
  }

  private afterViewInit() {
    this.canvas = document.getElementById('canvas');
    console.log('this.canvas..');
    console.log(this.canvas);
    this.drawRouletteWheel();
  }

  byte2Hex(n: number): string {
    const nybHexString = '0123456789ABCDEF';
    return (
      String(nybHexString.substr((n >> 4) & 0x0f, 1)) +
      nybHexString.substr(n & 0x0f, 1)
    );
  }

  RGB2Color(r: number, g: number, b: number): string {
    return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
  }

  getColor(item: number, maxitem: number): string {
    const phase = 0;
    const center = 128;
    const width = 127;
    const frequency = (Math.PI * 2) / maxitem;

    const red = Math.sin(frequency * item + 2 + phase) * width + center;
    const green = Math.sin(frequency * item + 0 + phase) * width + center;
    const blue = Math.sin(frequency * item + 4 + phase) * width + center;

    return this.RGB2Color(red, green, blue);
  }

  drawRouletteWheel() {
    const canvas = this.canvas; //.nativeElement;
    if (canvas.getContext) {
      const outsideRadius = 200;
      const textRadius = 160;
      const insideRadius = 125;

      this.ctx = canvas.getContext('2d');
      this.ctx.clearRect(0, 0, 500, 500);

      this.ctx.strokeStyle = 'black';
      this.ctx.lineWidth = 2;

      this.ctx.font = 'bold 12px Helvetica, Arial';
      for (let i = 0; i < this.options.length; i++) {
        const angle = this.startAngle + i * this.arc;
        this.ctx.fillStyle = this.getColor(i, this.options.length);

        this.ctx.beginPath();
        this.ctx.arc(250, 250, outsideRadius, angle, angle + this.arc, false);
        this.ctx.arc(250, 250, insideRadius, angle + this.arc, angle, true);
        this.ctx.stroke();
        this.ctx.fill();

        this.ctx.save();
        this.ctx.shadowOffsetX = -1;
        this.ctx.shadowOffsetY = -1;
        this.ctx.shadowBlur = 0;
        this.ctx.shadowColor = 'rgb(220,220,220)';
        this.ctx.fillStyle = 'black';
        this.ctx.translate(
          250 + Math.cos(angle + this.arc / 2) * textRadius,
          250 + Math.sin(angle + this.arc / 2) * textRadius,
        );
        this.ctx.rotate(angle + this.arc / 2 + Math.PI / 2);
        const text = this.options[i];
        this.ctx.fillText(text, -this.ctx.measureText(text).width / 2, 0);
        this.ctx.restore();
      }

      // Arrow
      this.ctx.fillStyle = 'black';
      this.ctx.beginPath();
      this.ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
      this.ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
      this.ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
      this.ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
      this.ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
      this.ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
      this.ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
      this.ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
      this.ctx.fill();
    }
  }

  spin() {
    this.spinArcStart = Math.random() * 10 + 10;
    this.spinTime = 0;
    this.spinTimeTotal = Math.random() * 3 + 4 * 1000;
    this.rotateWheel();
  }

  rotateWheel() {
    this.spinTime += 30;
    if (this.spinTime >= this.spinTimeTotal) {
      this.stopRotateWheel();
      return;
    }
    const spinAngle =
      this.spinArcStart -
      this.easeOut(this.spinTime, 0, this.spinArcStart, this.spinTimeTotal);
    this.startAngle += (spinAngle * Math.PI) / 180;
    this.drawRouletteWheel();
    this.spinTimeout = setTimeout(() => this.rotateWheel(), 30);
  }

  stopRotateWheel() {
    clearTimeout(this.spinTimeout);
    const degrees = (this.startAngle * 180) / Math.PI + 90;
    const arcd = (this.arc * 180) / Math.PI;
    const index = Math.floor((360 - (degrees % 360)) / arcd);
    this.ctx.save();
    this.ctx.font = 'bold 30px Helvetica, Arial';
    const text = this.options[index];
    console.log(text);

    this.selectedFilm = this.films.find(x => x.title === text);
    if (!!this.selectedFilm) {
      //this.selectedFilm.trailerId = 'lXO0he1WjYw';
    }
    this.ctx.fillText(
      text,
      250 - this.ctx.measureText(text).width / 2,
      250 + 10,
    );
    this.ctx.restore();
  }

  easeOut(t: number, b: number, c: number, d: number): number {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  }

  ngOnInit(): void {}

  clickBtn($event: MouseEvent) {
    console.log($event);
    this.spin();
  }

  backToSpinner($event: MouseEvent) {
    this.selectedFilm = undefined;
    this.afterViewInit();
  }
}

// tood: https://codepen.io/barney-parker/pen/OPyYqy
