import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wheel-picker',
  standalone: true,
  imports: [],
  templateUrl: './wheel-picker.component.html',
  styleUrl: './wheel-picker.component.css'
})
export class WheelPickerComponent implements OnInit{
  ctx:any;
  startAngle:any;
  spinTimeout:any;
  arc:any;
  movies = ['Inception', 'Titanic', 'Avatar', 'The Matrix', 'Interstellar', 'Gladiator', 'The Dark Knight', 'Forrest Gump'];
  colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF5', '#FF8C33', '#FF3333'];

  ngOnInit(): void {
    const canvas:any  = document.getElementById('wheel');
    this.ctx = canvas.getContext('2d');
    const spinButton = document.getElementById('spin');
    if (!!spinButton){



    this.startAngle = 0;
    this.arc = Math.PI / (this.movies.length / 2);
    this.spinTimeout = null;



    spinButton.addEventListener('click', () => {
      this.rotateWheel();
      setTimeout(this.stopRotateWheel, 3000);
    });

    this.drawWheel();
    }

  }

  drawWheel() {
    for (let i = 0; i < this.movies.length; i++) {
      const angle = this.startAngle + i * this.arc;
      this.ctx.fillStyle = this.colors[i];
      this.ctx.beginPath();
      this.ctx.arc(250, 250, 250, angle, angle + this.arc, false);
      this.ctx.arc(250, 250, 0, angle + this.arc, angle, true);
      this.ctx.fill();
      this.ctx.save();
      this.ctx.fillStyle = '#000';
      this.ctx.translate(250 + Math.cos(angle + this.arc / 2) * 150, 250 + Math.sin(angle + this.arc / 2) * 150);
      this.ctx.rotate(angle + this.arc / 2 + Math.PI / 2);
      this.ctx.fillText(this.movies[i], -this.ctx.measureText(this.movies[i]).width / 2, 0);
      this.ctx.restore();
    }
  }

  rotateWheel() {
    if (!!this) {
      this.startAngle += Math.PI / 30;
      this.drawWheel();
      this.spinTimeout = requestAnimationFrame(this.rotateWheel);
      console.log('this.spinTimeout...')
      console.log(this.spinTimeout)
    }
  }

  stopRotateWheel() {
    // cancelAnimationFrame(this.spinTimeout);
    // const selectedMovie = this.movies[Math.floor(Math.random() * this.movies.length)];
    // alert(`You should watch: ${selectedMovie}`);
  }

}
