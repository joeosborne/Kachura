namespace EFSampleSQLiteApp.Models
{
    public class Watchlist
    {
        public int Id { get; set; } // Primary Key
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; } = string.Empty;

        // Navigation property: A Watchlist has many Movies
        public ICollection<WatchlistMovie> WatchlistMovies { get; set; } = new List<WatchlistMovie>();
    }
}


