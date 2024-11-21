import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { WatchlistService } from '../watchlist.service';
import { Film } from '../model/film.model';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit, AfterViewInit {
  //@ViewChild('main') main: ElementRef;
  //@ViewChild('someButton') someButton: ElementRef;

  //  main = document.getElementById('main')

  searchForm: FormGroup;
  API_URL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
  IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
  SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
  films: any[] = [];

  ngAfterViewInit() {
    // const div = this.someDiv.nativeElement.querySelector(".insert");
    // const button = this.someButton.nativeElement;
    // div.appendChild(button);
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private watchlistService: WatchlistService
  ) {
    // Initialize the form group with a search term control
    this.searchForm = this.fb.group({
      searchTerm: [''],
    });
  }

  ngOnInit(): void {
    this.watchlistService.getWatchlist();
    // Listen for Enter key press
    // this.searchForm.get('searchTerm')?.valueChanges.subscribe(value => {
    //   if (value && value.trim() !== '') {
    //     ////console.log('Search Term:', value);
    //   }
    // });
    // this.searchForm.get('searchTerm')?.valueChanges.subscribe(value => {
    //
    // });
  }

  onSearch(): void {
    const searchTerm = this.searchForm.get('searchTerm')?.value;
    if (searchTerm && searchTerm !== '') {
      // todo: remove this when no longer needed. For now, it's a hack to get the data
      // var temp = ['Fight Club', 'The Matrix', 'Office Space', 'Election', 'The Blair Witch Project', 'The Sixth Sense', 'Being John Malkovich', 'Star Wars: The Phantom Menace', 'American Beauty', 'The Virgin Suicides', 'Boys Don&;t Cry', 'The Best Man', 'Three Kings', 'Magnolia']
      //
      // temp.forEach(x=>{
      //   this.getMovies(this.SEARCH_API + x);
      // })

      this.getMovies(this.SEARCH_API + searchTerm);
      //this.searchForm.get('searchTerm')?.value = ''
    } else {
      //window.location.reload()
    }
  }

  showMovies(movies: any[]) {
    //main.innerHTML = ''

    ////console.log('showMovies|movies..');
    ////console.log(movies);
    movies.forEach((movie) => {
      const { title, poster_path, vote_average, overview } = movie;
      debugger;
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');

      movieEl.innerHTML = `
            <img src="${this.IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>

            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `;
    });
  }

  onKeydown(event: KeyboardEvent): void {
    // ////console.log('event..')
    // ////console.log(event.key)
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }

  async getMovies(url: string) {
    const res = await fetch(url);
    const data = await res.json();

    ////console.log(data);
    //debugger;
    //this.showMovies(data.results)
    this.films = data.results;
    console.log('----');
    console.log('----');
    this.films.forEach((film) => {
      if (film.release_date.startsWith('1999')) {
        console.log('---');
        console.log('title: ' + film.title);
        console.log('overview: ' + film.overview);
        console.log('release_date: ' + film.release_date);
        console.log('poster_path: ' + film.poster_path);
        console.log('---');
      }
    });
    console.log('----');
    console.log('----');
  }

  addToWatchlist(film: Film) {
    ////console.log('add the following to addToWatchlist...');
    ////console.log(film.title);

    this.watchlistService.addToList(film);

    //this.router.navigate([`watchlist`]).then((r) => {});
  }
}

//   searchForm: FormGroup;
//
//
//   constructor(
//     private formBuilder: FormBuilder,
//   ) {
//     this.searchForm = this.formBuilder.group({
//       value: '',
//     });
//
//   }
//
//   ngOnInit(): void {
//     //this.getMovies(this.API_URL).then(r => {})
//
//   }
//
//   async getMovies(url:string) {
//     const res = await fetch(url)
//     const data = await res.json()
//     ////console.log(data)
//
//     //showMovies(data.results)
//   }
//
//   onSearch($event: SubmitEvent) {
//     ////console.log('onSearch..')
//     ////console.log($event)
//
//   }
// }
