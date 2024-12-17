namespace EFSampleSQLiteApp.Models
{
    public class WatchlistMovie
    {
        public int WatchlistId { get; set; } // FK to Watchlist
        public Watchlist Watchlist { get; set; } = null!;

        public int MovieId { get; set; } // FK to Movie
        public Movie Movie { get; set; } = null!;
    }
}


