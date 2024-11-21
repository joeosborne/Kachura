export interface Film {
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  // "title": "Movie one",
  // genre: string;
  // releaseDate: Date;
}

//
// <div class="search-container">
// <form [formGroup]="searchForm" (ngSubmit)="onSearch()">
// <input
//   type="text"
// formControlName="searchTerm"
// (keydown)="onKeydown($event)"
// placeholder="Search..."
// />
// <button type="submit">Search</button>
//   </form>
//   <!--  <main #main id="main"></main>-->
//   <div class="landing-container">
//   @for (film of films; track film) {
//   <div class="movie">
//   <img
//     src="{{ this.IMG_PATH }}{{ film.poster_path }}"
//   alt="{{ film.title }}"
//   />
//   <div class="movie-info">
//     <h3>{{ film.title }}</h3>
//   </div>
//   <div class="overview">
//     <h3>Overview</h3>
//   {{ film.overview }}
//   </div>
//
//   <div
//   (click)="addToWatchlist(film)"
//   class="favorite-icon"
//   alt="add to watchlist icon"
//     >
//     &#10084;
//   </div>
//   <!-- Heart icon -->
//   </div>
//
// }
// </div>
// </div>
//
// <!--<header>-->
// <!--&lt;!&ndash;  <form id="form">&ndash;&gt;-->
// <!--&lt;!&ndash;    <input type="text" id="search" class="search" placeholder="Search">&ndash;&gt;-->
// <!--&lt;!&ndash;  </form>&ndash;&gt;-->
//
// <!--&lt;!&ndash;  <form [formGroup]="searchForm">&ndash;&gt;-->
// <!--    <input type="text" id="search" (submit)="onSearch($event)" class="search" placeholder="Search">- -->
// <!--&lt;!&ndash;    <button (click)="onSearch($event)" class="button" type="submit">Search</button>&ndash;&gt;-->
//
// <!--&lt;!&ndash;  </form>&ndash;&gt;-->
//
// <!--</header>-->
