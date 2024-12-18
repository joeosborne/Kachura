namespace FilmWatchlist.Application.Models
{
    public class Movie
    {
        public int Id { get; set; } // Primary Key
        public string Title { get; set; } = string.Empty;
        public string ReleaseDate { get; set; } = string.Empty;
        public string PosterPath { get; set; } = string.Empty;
        public string Overview { get; set; } = string.Empty;

        // Navigation property for many-to-many relationship
        public ICollection<WatchlistMovie> WatchlistMovies { get; set; } = new List<WatchlistMovie>();
    }
}


