namespace FilmWatchlist
{
    public class WeatherForecast
    {
        public DateOnly Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string? Summary { get; set; }
    }
}


/*
 using System;
using System.Collections.Generic;

namespace MovieWatchlistApp
{
    public class User
    {
        public int UserId { get; set; } // Primary Key
        public string UserName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;

        // Navigation Property
        public ICollection<Watchlist> Watchlists { get; set; } = new List<Watchlist>();
    }

    public class Watchlist
    {
        public int WatchlistId { get; set; } // Primary Key
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int UserId { get; set; } // Foreign Key to User

        // Navigation Properties
        public User User { get; set; } = null!;
        public ICollection<Movie> Movies { get; set; } = new List<Movie>();
    }

    public class Movie
    {
        public int MovieId { get; set; } // Primary Key
        public string Title { get; set; } = string.Empty;
        public string Genre { get; set; } = string.Empty;
        public DateTime ReleaseDate { get; set; }

        // Navigation Property
        public ICollection<Watchlist> Watchlists { get; set; } = new List<Watchlist>();
    }

    // Join entity to represent many-to-many relationship between Watchlists and Movies
    public class WatchlistMovie
    {
        public int WatchlistId { get; set; } // Composite Key Part 1
        public int MovieId { get; set; } // Composite Key Part 2

        // Navigation Properties
        public Watchlist Watchlist { get; set; } = null!;
        public Movie Movie { get; set; } = null!;
    }
}

 */
