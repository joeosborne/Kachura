
//using EFSampleSQLiteApp.Models;
//using FilmWatchlist.Application.Models;

//namespace EFSampleSQLiteApp
//{
//    public static class DataHelpers
//    {
//        // Add a movie to the watchlist
//        public static void AddMovieToWatchlist(ApplicationDbContext context, int watchlistId, int movieId)
//        {
//            var watchlistMovie = new WatchlistMovie
//            {
//                WatchlistId = watchlistId,
//                MovieId = movieId
//            };

//            context.WatchlistMovies.Add(watchlistMovie);
//            context.SaveChanges();

//            Console.WriteLine($"Movie with ID {movieId} added to Watchlist with ID {watchlistId}.");
//        }

//        // Remove a movie from the watchlist
//        public static void RemoveMovieFromWatchlist(ApplicationDbContext context, int watchlistId, int movieId)
//        {
//            var watchlistMovie = context.WatchlistMovies
//                .FirstOrDefault(wm => wm.WatchlistId == watchlistId && wm.MovieId == movieId);

//            if (watchlistMovie != null)
//            {
//                context.WatchlistMovies.Remove(watchlistMovie);
//                context.SaveChanges();

//                Console.WriteLine($"Movie with ID {movieId} removed from Watchlist with ID {watchlistId}.");
//            }
//            else
//            {
//                Console.WriteLine($"Movie with ID {movieId} is not in Watchlist with ID {watchlistId}.");
//            }
//        }


//        public static void EmptyWatchlist(ApplicationDbContext context, int watchlistId)
//        {
//            IQueryable<WatchlistMovie> watchlistMovies = context.WatchlistMovies
//                .Where(wm => wm.WatchlistId == watchlistId);

//            foreach (var item in watchlistMovies)
//            {
//                context.WatchlistMovies.Remove(item);
//                context.SaveChanges();

//                Console.WriteLine($"watchlistId {watchlistId} was emptied.");
//            }
            
//            //if (watchlistMovie != null)
//            //{
//            //    context.WatchlistMovies.Remove(watchlistMovie);
//            //    context.SaveChanges();

//            //    Console.WriteLine($"watchlistId {watchlistId} was emptied.");
//            //}
//            //else
//            //{
//            //    Console.WriteLine($"watchlistId {watchlistId} not found.");
//            //}
//        }

        
//    }

//}

