import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(HttpClientModule),
//     provideRouter(APP_ROUTES),
//
//     [...]
//   ]
// });


/* todo:

film-film page..
add typed fake data set to be returned from a UI data svc.
stablise search and display correct trailer on selection
maybe add a link to RT review

--
wheel
look into npm package
modify film film comp. to take in..
 - string of film titles
 - trailer url (optional)




Add a registration/login process (post sept)
replace default "app-" prefix



 */

interface Film {
  id: number;
  title: string;
  director: string;
  releaseYear: number;
  genre: string[];
  duration?: number;
  rating?: number;
  synopsis?: string;
  cast: {
    actor: string;
    role: string;
  }[];
}

interface List {
  id: number;
  title: string;
  isDeleted: boolean;
  films: Film[]
}

// [
//   {
//     "title": "The Matrix",
//     "director": "Lana Wachowski, Lilly Wachowski",
//     "releaseYear": 1999,
//     "genre": ["Action", "Sci-Fi"],
//     "duration": 136,
//     "rating": 8.7,
//     "synopsis": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
//     "cast": [
//       {"actor": "Keanu Reeves", "role": "Neo"},
//       {"actor": "Laurence Fishburne", "role": "Morpheus"},
//       {"actor": "Carrie-Anne Moss", "role": "Trinity"}
//     ]
//   },
//   {
//     "title": "Fight Club",
//     "director": "David Fincher",
//     "releaseYear": 1999,
//     "genre": ["Drama"],
//     "duration": 139,
//     "rating": 8.8,
//     "synopsis": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
//     "cast": [
//       {"actor": "Brad Pitt", "role": "Tyler Durden"},
//       {"actor": "Edward Norton", "role": "The Narrator"},
//       {"actor": "Helena Bonham Carter", "role": "Marla Singer"}
//     ]
//   },
//   {
//     "title": "The Sixth Sense",
//     "director": "M. Night Shyamalan",
//     "releaseYear": 1999,
//     "genre": ["Drama", "Mystery", "Thriller"],
//     "duration": 107,
//     "rating": 8.1,
//     "synopsis": "A boy who communicates with spirits seeks the help of a disheartened child psychologist.",
//     "cast": [
//       {"actor": "Bruce Willis", "role": "Malcolm Crowe"},
//       {"actor": "Haley Joel Osment", "role": "Cole Sear"},
//       {"actor": "Toni Collette", "role": "Lynn Sear"}
//     ]
//   },
//   {
//     "title": "American Beauty",
//     "director": "Sam Mendes",
//     "releaseYear": 1999,
//     "genre": ["Drama"],
//     "duration": 122,
//     "rating": 8.3,
//     "synopsis": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
//     "cast": [
//       {"actor": "Kevin Spacey", "role": "Lester Burnham"},
//       {"actor": "Annette Bening", "role": "Carolyn Burnham"},
//       {"actor": "Thora Birch", "role": "Jane Burnham"}
//     ]
//   },
//   {
//     "title": "The Green Mile",
//     "director": "Frank Darabont",
//     "releaseYear": 1999,
//     "genre": ["Crime", "Drama", "Fantasy"],
//     "duration": 189,
//     "rating": 8.6,
//     "synopsis": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
//     "cast": [
//       {"actor": "Tom Hanks", "role": "Paul Edgecomb"},
//       {"actor": "Michael Clarke Duncan", "role": "John Coffey"},
//       {"actor": "David Morse", "role": "Brutus 'Brutal' Howell"}
//     ]
//   },
//   {
//     "title": "Toy Story 2",
//     "director": "John Lasseter, Ash Brannon, Lee Unkrich",
//     "releaseYear": 1999,
//     "genre": ["Animation", "Adventure", "Comedy"],
//     "duration": 92,
//     "rating": 7.9,
//     "synopsis": "When Woody is stolen by a toy collector, Buzz and his friends vow to rescue him, but Woody finds the idea of immortality in a museum tempting.",
//     "cast": [
//       {"actor": "Tom Hanks", "role": "Woody"},
//       {"actor": "Tim Allen", "role": "Buzz Lightyear"},
//       {"actor": "Joan Cusack", "role": "Jessie"}
//     ]
//   },
//   {
//     "title": "The Blair Witch Project",
//     "director": "Daniel Myrick, Eduardo Sánchez",
//     "releaseYear": 1999,
//     "genre": ["Horror", "Mystery"],
//     "duration": 81,
//     "rating": 6.5,
//     "synopsis": "Three film students vanish after traveling into a Maryland forest to film a documentary on the local Blair Witch legend, leaving only their footage behind.",
//     "cast": [
//       {"actor": "Heather Donahue", "role": "Heather"},
//       {"actor": "Michael C. Williams", "role": "Mike"},
//       {"actor": "Joshua Leonard", "role": "Josh"}
//     ]
//   },
//   {
//     "title": "Magnolia",
//     "director": "Paul Thomas Anderson",
//     "releaseYear": 1999,
//     "genre": ["Drama"],
//     "duration": 188,
//     "rating": 8.0,
//     "synopsis": "An epic mosaic of interrelated characters in search of love, forgiveness, and meaning in the San Fernando Valley.",
//     "cast": [
//       {"actor": "Tom Cruise", "role": "Frank T.J. Mackey"},
//       {"actor": "Jason Robards", "role": "Earl Partridge"},
//       {"actor": "Julianne Moore", "role": "Linda Partridge"}
//     ]
//   },
//   {
//     "title": "Boogie Nights",
//     "director": "Paul Thomas Anderson",
//     "releaseYear": 1997,
//     "genre": ["Drama"],
//     "duration": 155,
//     "rating": 7.9,
//     "synopsis": "The story of a young man's adventures in the Californian pornography industry of the late 1970s and early 1980s.",
//     "cast": [
//       {"actor": "Mark Wahlberg", "role": "Eddie Adams / Dirk Diggler"},
//       {"actor": "Julianne Moore", "role": "Amber Waves"},
//       {"actor": "Burt Reynolds", "role": "Jack Horner"}
//     ]
//   },
//   {
//     "title": "Eyes Wide Shut",
//     "director": "Stanley Kubrick",
//     "releaseYear": 1999,
//     "genre": ["Drama", "Mystery", "Thriller"],
//     "duration": 159,
//     "rating": 7.5,
//     "synopsis": "A Manhattan doctor embarks on a bizarre, night-long odyssey after his wife's admission of unfulfilled longing.",
//     "cast": [
//       {"actor": "Tom Cruise", "role": "Dr. Bill Harford"},
//       {"actor": "Nicole Kidman", "role": "Alice Harford"},
//       {"actor": "Todd Field", "role": "Nick Nightingale"}
//     ]
//   },
//   {
//     "title": "The Iron Giant",
//     "director": "Brad Bird",
//     "releaseYear": 1999,
//     "genre": ["Animation", "Action", "Adventure"],
//     "duration": 86,
//     "rating": 8.0,
//     "synopsis": "A young boy befriends a giant robot from outer space that a paranoid government agent wants to destroy.",
//     "cast": [
//       {"actor": "Eli Marienthal", "role": "Hogarth Hughes"},
//       {"actor": "Harry Connick Jr.", "role": "Dean McCoppin"},
//       {"actor": "Jennifer Aniston", "role": "Annie Hughes"}
//     ]
//   },
//   {
//     "title": "The Mummy",
//     "director": "Stephen Sommers",
//     "releaseYear": 1999,
//     "genre": ["Action", "Adventure", "Fantasy"],
//     "duration": 124,
//     "rating": 7.0,
//     "synopsis": "At an archaeological dig in the ancient city of Hamunaptra, an American serving in the French Foreign Legion accidentally awakens a mummy.",
//     "cast": [
//       {"actor": "Brendan Fraser", "role": "Rick O'Connell"},
//       {"actor": "Rachel Weisz", "role": "Evelyn Carnahan"},
//       {"actor": "John Hannah", "role": "Jonathan Carnahan"}
//     ]
//   },
//   {
//     "title": "Notting Hill",
//     "director": "Roger Michell",
//     "releaseYear": 1999,
//     "genre": ["Comedy", "Drama", "Romance"],
//     "duration": 124,
//     "rating": 7.1,
//     "synopsis": "The life of a simple bookshop owner changes when he meets the most famous film star in the world.",
//     "cast": [
//       {"actor": "Hugh Grant", "role": "William Thacker"},
//       {"actor": "Julia Roberts", "role": "Anna Scott"},
//       {"actor": "Richard McCabe", "role": "Tony"}
//     ]
//   },
  // {
  //   "title": "The Insider",
  //   "director": "Michael Mann",
  //   "releaseYear": 1999,
  //   "genre": ["Biography", "Drama", "Thriller"],
  //   "duration": 157,
  //   "rating": 7.8,
  //   "synopsis": "A research chemist comes under personal and professional attack when he

