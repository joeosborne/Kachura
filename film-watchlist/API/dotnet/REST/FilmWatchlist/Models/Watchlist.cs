namespace FilmWatchlist.Application.Models
{
    public class Watchlist
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; } = string.Empty;
        public ICollection<WatchlistMovie> WatchlistMovies { get; set; } = new List<WatchlistMovie>();
    }
}