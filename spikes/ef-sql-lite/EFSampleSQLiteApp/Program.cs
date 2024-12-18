using System;
using System.Linq;
using EFSampleSQLiteApp;
using EFSampleSQLiteApp.Models;
using Microsoft.EntityFrameworkCore.Migrations.Operations;

class Program
{
    static void Main(string[] args)
    {
        using (var context = new ApplicationDbContext())
        {
            // Ensure the database is created
            context.Database.EnsureCreated();

            /********************/
            // DataHelpers

            //// Example: Add a movie to a watchlist
            //var watchlistId = 1; // Assume watchlist ID is 1
            ////var movieIdToAdd = 2; // Assume movie ID is 2
            //DataHelpers.EmptyWatchlist(context, 1);
            //// DataHelpers.AddMovieToWatchlist(context, watchlistId, 1);
            //DataHelpers.AddMovieToWatchlist(context, watchlistId, 2);

            //// Example: Remove a movie from a watchlist
            ////var movieIdToRemove = 1; // Assume movie ID 1 needs to be removed
            ////DataHelpers.RemoveMovieFromWatchlist(context, watchlistId, movieIdToRemove);


            DataHelpers.EmptyWatchlist(context, 2);
            DataHelpers.EmptyWatchlist(context, 3);
            DataHelpers.EmptyWatchlist(context, 4);
            DataHelpers.EmptyWatchlist(context, 5);
            /********************/






            /********************/
            // todo: add films(s)
            // Add unique Movies
            //var inception = new Movie { Title = "Inception" };
            //var interstellar = new Movie { Title = "Interstellar" };

            //context.Movies.AddRange(inception, interstellar);
            //context.SaveChanges();


            /********************/

            /********************/
            //// todo: add list(s)

            //// Add Watchlists
            //var favorites = new Watchlist { Name = "Favorites", Description = "My favorite movies" };
            //var sciFiHits = new Watchlist { Name = "Sci-Fi Hits", Description = "Top Sci-Fi movies" };

            //context.Watchlists.AddRange(favorites, sciFiHits);
            //context.SaveChanges();

            //// Link Movies to Watchlists via the junction table
            //context.WatchlistMovies.AddRange(
            //    new WatchlistMovie { WatchlistId = favorites.Id, MovieId = inception.Id },
            //    new WatchlistMovie { WatchlistId = favorites.Id, MovieId = interstellar.Id },
            //    new WatchlistMovie { WatchlistId = sciFiHits.Id, MovieId = inception.Id } // Reusing 'Inception'
            //);

            //context.SaveChanges();

            /********************/



            /********************/
            //// Fetch and display Watchlists with their Movies
            var watchlists = context.Watchlists
                .Select(w => new
                {
                    w.Id,
                    w.Name,
                    Movies = w.WatchlistMovies.Select(wm => wm.Movie.Title)
                })
                .ToList();

            foreach (var watchlist in watchlists)
            {
                Console.WriteLine($"Watchlist: {watchlist.Id}: {watchlist.Name}");
                foreach (var movie in watchlist.Movies)
                {
                    Console.WriteLine($"   Movie: {movie}");
                }
            }
            /********************/






        }
    }
}


//using System;
//using System.Linq;
//using EFSampleSQLiteApp.Models;

//class Program
//{
//    static void Main(string[] args)
//    {
//        using (var context = new ApplicationDbContext())
//        {
//            // Ensure database and tables are created
//            context.Database.EnsureCreated();

//            // Add a new student
//            // var student = new Student { Name = "Carly Osborne", Age = 44, Email = "Carly_Osborne@test.com" };

//            //var wl = new Watchlist
//            //{
//            //    Name = "1999",
//            //    //Movies = new List<Movie>
//            //    //{
//            //    //    new Movie
//            //    //    {
//            //    //        Title = "Fight Club",
//            //    //        Overview = "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground 'fight clubs' forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
//            //    //        ReleaseDate = "1999-10-15",
//            //    //        PosterPath = "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
//            //    //    },
//            //    //    new Movie
//            //    //    {
//            //    //        Title = "The Matrix",
//            //    //        Overview = "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
//            //    //        ReleaseDate = "1999-03-31",
//            //    //        PosterPath = "/p96dm7sCMn4VYAStA6siNz30G1r.jpg"
//            //    //    },
//            //    //}
//            //}; 


//            //context.Watchlists.Add(wl);
//            //context.SaveChanges();
//            //Console.WriteLine("Student added successfully!");

//            //// Fetch and display all students
//            //var watchlist = context.Watchlists.ToList();
//            //foreach (var w in watchlist)
//            //{
//            //    Console.WriteLine("-----");
//            //    Console.WriteLine($"Id: {w.Id}, Name: {w.Name}");
//            //    //foreach (var m in w.Movies)
//            //    //{
//            //    //    Console.WriteLine($"Id: {m.Id}, Title: {m.Title}");
//            //    //}
//            //}


//            //var wl = new Watchlist
//            //{
//            //    Name = "1999",
//            //    WatchlistMovies = new List<WatchlistMovie>
//            //    {
//            //        new WatchlistMovie
//            //        {
//            //            MovieId = 1
//            //        },
//            //        new WatchlistMovie
//            //        {
//            //            MovieId = 2
//            //        }
//            //    }
//            //};


//            //context.Watchlists.Add(wl);
//            //context.SaveChanges();
//            //Console.WriteLine("l added successfully!");


//            foreach (var wl in context.WatchlistMovies)
//            {
//                    //Console.WriteLine(wl.Title);

//            }



//            //{
//            //    Console.WriteLine("-----");
//            //    Console.WriteLine($"Id: {m.Id}, Tiel: {m.Title}");
//            //    //foreach (var m in w.Movies)
//            //    //{
//            //    //    Console.WriteLine($"Id: {m.Id}, Title: {m.Title}");
//            //    //}
//            //}


//            //Movies = new List<Movie>
//            //{
//            //    new Movie
//            //    {
//            //        Title = "Fight Club",
//            //        Overview = "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground 'fight clubs' forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
//            //        ReleaseDate = "1999-10-15",
//            //        PosterPath = "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
//            //    },
//            //    new Movie
//            //    {
//            //        Title = "The Matrix",
//            //        Overview = "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
//            //        ReleaseDate = "1999-03-31",
//            //        PosterPath = "/p96dm7sCMn4VYAStA6siNz30G1r.jpg"
//            //    },
//            //}

//            //var movies = new List<Movie>
//            //{
//            //    new Movie
//            //    {
//            //        Title = "Fight Club",
//            //        Overview = "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground 'fight clubs' forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
//            //        ReleaseDate = "1999-10-15",
//            //        PosterPath = "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
//            //    },
//            //    new Movie
//            //    {
//            //        Title = "The Matrix",
//            //        Overview = "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
//            //        ReleaseDate = "1999-03-31",
//            //        PosterPath = "/p96dm7sCMn4VYAStA6siNz30G1r.jpg"
//            //    },
//            //};
//            //context.Movies.Add(movies[0]);
//            //context.Movies.Add(movies[1]);
//            //context.SaveChanges();
//            //Console.WriteLine("filmns added successfully!");

//            //// Fetch and display all students
//            //var moviesPers = context.Movies.ToList();
//            //foreach (var m in moviesPers)
//            //{
//            //    Console.WriteLine("-----");
//            //    Console.WriteLine($"Id: {m.Id}, Tiel: {m.Title}");
//            //    //foreach (var m in w.Movies)
//            //    //{
//            //    //    Console.WriteLine($"Id: {m.Id}, Title: {m.Title}");
//            //    //}
//            //}

//        }
//    }
//}






// todo: use or remove these data helpers..
