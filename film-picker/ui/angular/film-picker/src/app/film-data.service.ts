import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Film } from './model/film.model';
import { List } from './model/film-list.model';

@Injectable({
  providedIn: 'root',
})
export class FilmDataService {
  constructor() {}

  getFilms(): Observable<Film[]> {
    const films: Film[] = [
      {
        id: 1,
        title: 'Eyes Wide Shut',
        posterImageName: 'eyes.jpg',
        director: 'Stanley Kubrick',
        releaseYear: 1999,
        genre: ['Drama', 'Mystery', 'Thriller'],
        duration: 159,
        rating: 7.4,
        synopsis:
          "A Manhattan doctor embarks on a bizarre, night-long odyssey after his wife's admission of unfulfilled longing.",
        cast: [
          { actor: 'Tom Cruise', role: 'Dr. William Harford' },
          { actor: 'Nicole Kidman', role: 'Alice Harford' },
        ],
      },
      {
        id: 2,
        title: 'The Iron Giant',
        director: 'Brad Bird',
        releaseYear: 1999,
        genre: ['Animation', 'Action', 'Adventure'],
        duration: 86,
        rating: 8.0,
        synopsis:
          'A young boy befriends a giant robot from outer space that a paranoid government agent wants to destroy.',
        cast: [
          { actor: 'Eli Marienthal', role: 'Hogarth Hughes' },
          { actor: 'Vin Diesel', role: 'The Iron Giant' },
        ],
      },
      {
        id: 3,
        title: 'The Blair Witch Project',
        director: 'Daniel Myrick, Eduardo Sánchez',
        releaseYear: 1999,
        genre: ['Horror', 'Mystery'],
        duration: 81,
        rating: 6.5,
        synopsis:
          'Three film students vanish after traveling into a Maryland forest to film a documentary on the local Blair Witch legend, leaving only their footage behind.',
        cast: [
          { actor: 'Heather Donahue', role: 'Heather Donahue' },
          { actor: 'Michael C. Williams', role: 'Michael Williams' },
        ],
      },
      {
        id: 3,
        title: 'The Talented Mr. Ripley',
        director: 'Anthony Minghella',
        releaseYear: 1999,
        genre: ['Crime', 'Drama', 'Thriller'],
        duration: 139,
        rating: 7.4,
        synopsis:
          'In late 1950s New York, Tom Ripley, a young underachiever, is sent to Europe to retrieve a rich and spoiled millionaire playboy. But when the errand fails, Ripley takes extreme measures.',
        cast: [
          { actor: 'Matt Damon', role: 'Tom Ripley' },
          { actor: 'Gwyneth Paltrow', role: 'Marge Sherwood' },
        ],
      },
      {
        id: 14,
        title: 'The Insider',
        director: 'Michael Mann',
        releaseYear: 1999,
        genre: ['Biography', 'Drama', 'Thriller'],
        duration: 157,
        rating: 7.8,
        synopsis:
          'A research chemist comes under personal and professional attack when he decides to appear in a 60 Minutes exposé on Big Tobacco.',
        cast: [
          { actor: 'Russell Crowe', role: 'Jeffrey Wigand' },
          { actor: 'Al Pacino', role: 'Lowell Bergman' },
        ],
      },
      {
        id: 4,
        title: 'Fight Club',
        posterImageName: 'fight-club.jpg',
        director: 'David Fincher',
        releaseYear: 1999,
        genre: ['Drama'],
        duration: 139,
        rating: 8.8,
        synopsis:
          'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
        cast: [
          { actor: 'Brad Pitt', role: 'Tyler Durden' },
          { actor: 'Edward Norton', role: 'The Narrator' },
        ],
      },
      {
        id: 15,
        title: 'The Matrix',
        posterImageName: 'matrix.webp',
        director: 'Lana Wachowski, Lilly Wachowski',
        releaseYear: 1999,
        genre: ['Action', 'Sci-Fi'],
        duration: 136,
        rating: 8.7,
        synopsis:
          'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        cast: [
          { actor: 'Keanu Reeves', role: 'Neo' },
          { actor: 'Laurence Fishburne', role: 'Morpheus' },
        ],
      },
      {
        id: 5,
        title: 'Office Space',
        director: 'Mike Judge',
        releaseYear: 1999,
        genre: ['Comedy'],
        duration: 89,
        rating: 7.7,
        synopsis:
          'Three company workers who hate their jobs decide to rebel against their greedy boss.',
        cast: [
          { actor: 'Ron Livingston', role: 'Peter Gibbons' },
          { actor: 'Jennifer Aniston', role: 'Joanna' },
        ],
      },
      {
        id: 6,
        title: 'Election',
        posterImageName: 'election.jpg',
        director: 'Alexander Payne',
        releaseYear: 1999,
        genre: ['Comedy', 'Drama'],
        duration: 103,
        rating: 7.2,
        synopsis:
          'A high school teacher meets his match in an over-achieving student politician.',
        cast: [
          { actor: 'Matthew Broderick', role: 'Jim McAllister' },
          { actor: 'Reese Witherspoon', role: 'Tracy Flick' },
        ],
      },
      {
        id: 17,
        title: 'The Sixth Sense',
        director: 'M. Night Shyamalan',
        posterImageName: 'sixth.jpg',
        releaseYear: 1999,
        genre: ['Drama', 'Mystery', 'Thriller'],
        duration: 107,
        rating: 8.1,
        synopsis:
          'A boy who communicates with spirits seeks the help of a disheartened child psychologist.',
        cast: [
          { actor: 'Bruce Willis', role: 'Malcolm Crowe' },
          { actor: 'Haley Joel Osment', role: 'Cole Sear' },
        ],
      },
      {
        id: 7,
        title: 'Being John Malkovich',
        director: 'Spike Jonze',
        releaseYear: 1999,
        genre: ['Comedy', 'Drama', 'Fantasy'],
        duration: 113,
        rating: 7.7,
        synopsis:
          'A puppeteer discovers a portal that leads literally into the head of movie star John Malkovich.',
        cast: [
          { actor: 'John Cusack', role: 'Craig Schwartz' },
          { actor: 'Cameron Diaz', role: 'Lotte Schwartz' },
        ],
      },
      {
        id: 8,
        title: 'Star Wars: Episode I - The Phantom Menace',
        director: 'George Lucas',
        releaseYear: 1999,
        genre: ['Action', 'Adventure', 'Fantasy'],
        duration: 136,
        rating: 6.5,
        synopsis:
          'Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to reclaim their old glory.',
        cast: [
          { actor: 'Liam Neeson', role: 'Qui-Gon Jinn' },
          { actor: 'Ewan McGregor', role: 'Obi-Wan Kenobi' },
        ],
      },
      {
        id: 9,
        title: 'American Beauty',
        director: 'Sam Mendes',
        releaseYear: 1999,
        genre: ['Drama'],
        duration: 122,
        rating: 8.3,
        synopsis:
          "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
        cast: [
          { actor: 'Kevin Spacey', role: 'Lester Burnham' },
          { actor: 'Annette Bening', role: 'Carolyn Burnham' },
        ],
      },
      {
        id: 10,
        title: 'The Virgin Suicides',
        director: 'Sofia Coppola',
        releaseYear: 1999,
        genre: ['Drama', 'Romance'],
        duration: 97,
        rating: 7.2,
        synopsis:
          'A group of male friends become obsessed with five mysterious sisters who are sheltered by their strict, religious parents in suburban Detroit in the mid 1970s.',
        cast: [
          { actor: 'Kirsten Dunst', role: 'Lux Lisbon' },
          { actor: 'Josh Hartnett', role: 'Trip Fontaine' },
        ],
      },
      {
        id: 11,
        title: "Boys Don't Cry",
        director: 'Kimberly Peirce',
        releaseYear: 1999,
        genre: ['Biography', 'Crime', 'Drama'],
        duration: 118,
        rating: 7.5,
        synopsis:
          'A young man named Brandon Teena navigates love, life, and being transgender in rural Nebraska.',
        cast: [
          { actor: 'Hilary Swank', role: 'Brandon Teena' },
          { actor: 'Chloë Sevigny', role: 'Lana Tisdel' },
        ],
      },
    ];

    //     [
    //   {
    //     id: 1,
    //     title: 'Fight Club',
    //     director: 'David Fincher',
    //     releaseYear: 1999,
    //     genre: ['Drama'],
    //     duration: 139,
    //     rating: 8.8,
    //     synopsis:
    //       'An insomniac office worker and a devil-may-care soap maker form an underground fight club.',
    //     cast: [
    //       { actor: 'Brad Pitt', role: 'Tyler Durden' },
    //       { actor: 'Edward Norton', role: 'Narrator' },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     title: 'The Matrix',
    //     trailerId: 'lXO0he1WjYw',
    //     imdbUrl: 'https://www.imdb.com/title/tt0133093/',
    //     rottenTomatoesUrl: 'https://www.rottentomatoes.com/m/matrix',
    //     director: 'Lana Wachowski, Lilly Wachowski',
    //     releaseYear: 1999,
    //     genre: ['Action', 'Sci-Fi'],
    //     duration: 136,
    //     rating: 8.7,
    //     synopsis:
    //       'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
    //     cast: [
    //       { actor: 'Keanu Reeves', role: 'Neo' },
    //       { actor: 'Laurence Fishburne', role: 'Morpheus' },
    //     ],
    //   },
    //   {
    //     id: 3,
    //     title: 'American Beauty',
    //     director: 'Sam Mendes',
    //     releaseYear: 1999,
    //     genre: ['Drama'],
    //     duration: 122,
    //     rating: 8.3,
    //     synopsis:
    //       "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
    //     cast: [
    //       { actor: 'Kevin Spacey', role: 'Lester Burnham' },
    //       { actor: 'Annette Bening', role: 'Carolyn Burnham' },
    //     ],
    //   },
    //   {
    //     id: 4,
    //     title: 'The Green Mile',
    //     director: 'Frank Darabont',
    //     releaseYear: 1999,
    //     genre: ['Crime', 'Drama', 'Fantasy'],
    //     duration: 189,
    //     rating: 8.6,
    //     synopsis:
    //       "A tale set on death row, where gentle giant John Coffey possesses the mysterious power to heal people's ailments.",
    //     cast: [
    //       { actor: 'Tom Hanks', role: 'Paul Edgecomb' },
    //       { actor: 'Michael Clarke Duncan', role: 'John Coffey' },
    //     ],
    //   },
    //   {
    //     id: 5,
    //     title: 'Eyes Wide Shut',
    //     director: 'Stanley Kubrick',
    //     releaseYear: 1999,
    //     genre: ['Drama', 'Mystery', 'Thriller'],
    //     duration: 159,
    //     rating: 7.5,
    //     synopsis:
    //       "A Manhattan doctor embarks on a bizarre, night-long odyssey after his wife's admission of unfulfilled longing.",
    //     cast: [
    //       { actor: 'Tom Cruise', role: 'Dr. Bill Harford' },
    //       { actor: 'Nicole Kidman', role: 'Alice Harford' },
    //     ],
    //   },
    //   {
    //     id: 6,
    //     title: 'Toy Story 2',
    //     director: 'John Lasseter, Ash Brannon, Lee Unkrich',
    //     releaseYear: 1999,
    //     genre: ['Animation', 'Adventure', 'Comedy'],
    //     duration: 92,
    //     rating: 7.9,
    //     synopsis:
    //       'When Woody is stolen by a toy collector, Buzz and his friends set out on a rescue mission to save him.',
    //     cast: [
    //       { actor: 'Tom Hanks', role: 'Woody' },
    //       { actor: 'Tim Allen', role: 'Buzz Lightyear' },
    //     ],
    //   },
    //   {
    //     id: 7,
    //     title: 'The Sixth Sense',
    //     director: 'M. Night Shyamalan',
    //     releaseYear: 1999,
    //     genre: ['Drama', 'Mystery', 'Thriller'],
    //     duration: 107,
    //     rating: 8.2,
    //     synopsis:
    //       'A boy who communicates with spirits seeks the help of a disheartened child psychologist.',
    //     cast: [
    //       { actor: 'Bruce Willis', role: 'Malcolm Crowe' },
    //       { actor: 'Haley Joel Osment', role: 'Cole Sear' },
    //     ],
    //   },
    //   {
    //     id: 8,
    //     title: 'Election',
    //     director: 'Alexander Payne',
    //     releaseYear: 1999,
    //     genre: ['Comedy', 'Drama'],
    //     duration: 103,
    //     rating: 7.2,
    //     synopsis:
    //       'A high school teacher meets his match in an over-achieving student politician.',
    //     cast: [
    //       { actor: 'Matthew Broderick', role: 'Jim McAllister' },
    //       { actor: 'Reese Witherspoon', role: 'Tracy Flick' },
    //     ],
    //   },
    //   {
    //     id: 9,
    //     title: 'Being John Malkovich',
    //     director: 'Spike Jonze',
    //     releaseYear: 1999,
    //     genre: ['Comedy', 'Drama', 'Fantasy'],
    //     duration: 113,
    //     rating: 7.7,
    //     synopsis:
    //       'A puppeteer discovers a portal that leads literally into the head of movie star John Malkovich.',
    //     cast: [
    //       { actor: 'John Cusack', role: 'Craig Schwartz' },
    //       { actor: 'Cameron Diaz', role: 'Lotte Schwartz' },
    //     ],
    //   },
    //   {
    //     id: 10,
    //     title: 'The Talented Mr. Ripley',
    //     director: 'Anthony Minghella',
    //     releaseYear: 1999,
    //     genre: ['Crime', 'Drama', 'Thriller'],
    //     duration: 139,
    //     rating: 7.4,
    //     synopsis:
    //       'In late 1950s New York, a young underachiever is sent to Italy to retrieve a rich and spoiled millionaire playboy.',
    //     cast: [
    //       { actor: 'Matt Damon', role: 'Tom Ripley' },
    //       { actor: 'Gwyneth Paltrow', role: 'Marge Sherwood' },
    //     ],
    //   },
    //   {
    //     id: 11,
    //     title: 'The Iron Giant',
    //     director: 'Brad Bird',
    //     releaseYear: 1999,
    //     genre: ['Animation', 'Action', 'Adventure'],
    //     duration: 86,
    //     rating: 8.0,
    //     synopsis:
    //       'A young boy befriends a giant robot from outer space that a paranoid government agent wants to destroy.',
    //     cast: [
    //       { actor: 'Eli Marienthal', role: 'Hogarth Hughes' },
    //       { actor: 'Vin Diesel', role: 'The Iron Giant' },
    //     ],
    //   },
    //   {
    //     id: 12,
    //     title: 'The Blair Witch Project',
    //     director: 'Daniel Myrick, Eduardo Sánchez',
    //     releaseYear: 1999,
    //     genre: ['Horror', 'Mystery'],
    //     duration: 81,
    //     rating: 6.5,
    //     synopsis:
    //       'Three film students vanish after traveling into a Maryland forest to film a documentary on the local Blair Witch legend.',
    //     cast: [
    //       { actor: 'Heather Donahue', role: 'Heather' },
    //       { actor: 'Michael C. Williams', role: 'Mike' },
    //     ],
    //   },
    //   {
    //     id: 13,
    //     title: 'Notting Hill',
    //     director: 'Roger Michell',
    //     releaseYear: 1999,
    //     genre: ['Comedy', 'Drama', 'Romance'],
    //     duration: 124,
    //     rating: 7.1,
    //     synopsis:
    //       'The life of a simple bookshop owner changes when he meets the most famous film star in the world.',
    //     cast: [
    //       { actor: 'Hugh Grant', role: 'William Thacker' },
    //       { actor: 'Julia Roberts', role: 'Anna Scott' },
    //     ],
    //   },
    //   {
    //     id: 14,
    //     title: 'The Mummy',
    //     director: 'Stephen Sommers',
    //     releaseYear: 1999,
    //     genre: ['Action', 'Adventure', 'Fantasy'],
    //     duration: 124,
    //     rating: 7.0,
    //     synopsis:
    //       'At an archaeological dig in the ancient city of Hamunaptra, an American serving in the French Foreign Legion accidentally awakens a mummy.',
    //     cast: [
    //       { actor: 'Brendan Fraser', role: "Rick O'Connell" },
    //       { actor: 'Rachel Weisz', role: 'Evelyn Carnahan' },
    //     ],
    //   },
    //   {
    //     id: 15,
    //     title: 'Office Space',
    //     director: 'Mike Judge',
    //     releaseYear: 1999,
    //     genre: ['Comedy'],
    //     duration: 89,
    //     rating: 7.7,
    //     synopsis:
    //       'Three company workers who hate their jobs decide to rebel against their greedy boss.',
    //     cast: [
    //       { actor: 'Ron Livingston', role: 'Peter Gibbons' },
    //       { actor: 'Jennifer Aniston', role: 'Joanna' },
    //     ],
    //   },
    //   {
    //     id: 16,
    //     title: 'Office Space',
    //     director: 'Mike Judge',
    //     releaseYear: 1999,
    //     genre: ['Comedy'],
    //     duration: 89,
    //     rating: 7.7,
    //     synopsis:
    //       'Three company workers who hate their jobs decide to rebel against their greedy boss.',
    //     cast: [
    //       { actor: 'Ron Livingston', role: 'Peter Gibbons' },
    //       { actor: 'Jennifer Aniston', role: 'Joanna' },
    //     ],
    //   },
    //   {
    //     id: 17,
    //     title: 'Magnolia',
    //     director: 'Paul Thomas Anderson',
    //     releaseYear: 1999,
    //     genre: ['Drama'],
    //     duration: 188,
    //     rating: 8.0,
    //     synopsis:
    //       'An epic mosaic of interrelated characters in search of love, forgiveness, and meaning in the San Fernando Valley.',
    //     cast: [
    //       { actor: 'Tom Cruise', role: 'Frank T.J. Mackey' },
    //       { actor: 'Philip Seymour Hoffman', role: 'Phil Parma' },
    //     ],
    //   },
    //   {
    //     id: 18,
    //     title: 'The Insider',
    //     director: 'Michael Mann',
    //     releaseYear: 1999,
    //     genre: ['Biography', 'Drama', 'Thriller'],
    //     duration: 157,
    //     rating: 7.8,
    //     synopsis:
    //       'A research chemist comes under personal and professional attack when he decides to appear in a "60 Minutes" exposé on Big Tobacco.',
    //     cast: [
    //       { actor: 'Russell Crowe', role: 'Jeffrey Wigand' },
    //       { actor: 'Al Pacino', role: 'Lowell Bergman' },
    //     ],
    //   },
    //   {
    //     id: 19,
    //     title: 'The Hurricane',
    //     director: 'Norman Jewison',
    //     releaseYear: 1999,
    //     genre: ['Biography', 'Drama', 'Sport'],
    //     duration: 146,
    //     rating: 7.6,
    //     synopsis:
    //       'The story of Rubin "Hurricane" Carter, a boxer wrongly imprisoned for murder, and the people who aided in his fight to prove his innocence.',
    //     cast: [
    //       { actor: 'Denzel Washington', role: 'Rubin Carter' },
    //       { actor: 'Vicellous Shannon', role: 'Lesra Martin' },
    //     ],
    //   },
    //   {
    //     id: 20,
    //     title: '10 Things I Hate About You',
    //     director: 'Gil Junger',
    //     releaseYear: 1999,
    //     genre: ['Comedy', 'Drama', 'Romance'],
    //     duration: 97,
    //     rating: 7.3,
    //     synopsis:
    //       "A pretty, popular teenager can't go out on a date until her ill-tempered older sister does.",
    //     cast: [
    //       { actor: 'Heath Ledger', role: 'Patrick Verona' },
    //       { actor: 'Julia Stiles', role: 'Kat Stratford' },
    //     ],
    //   },
    // ];

    return of(films);
  }

  getLists(): Observable<List[]> {
    const lists: List[] = [
      {
        id: 1,
        title: '1999 book',
        imageName: '1999.jpg',
        films: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
          { id: 9 },
          { id: 10 },
          { id: 11 },
          { id: 12 },
          { id: 13 },
          { id: 14 },
          { id: 15 },
          { id: 16 },
          { id: 17 },
          { id: 18 },
          { id: 19 },
          { id: 20 },
        ],
      },
      {
        id: 2,
        title: 'Netflix',
        imageName: 'netflix.jpg',
        films: [],
      },
      {
        id: 3,
        title: 'PTA',
        imageName: 'pta.jpg',
        films: [],
      },
      {
        id: 4,
        title: 'Disney +',
        imageName: 'disney-plus.jpg',
        films: [],
      },
    ];

    return of(lists);
  }
}
