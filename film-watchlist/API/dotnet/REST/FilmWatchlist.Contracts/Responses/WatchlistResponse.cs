



using FilmWatchlist.EFCore;

public class WatchlistResponse
{
    public required int Id { get; init; }
    
    public required string Name { get; init; }

    public string Description { get; init; }

    public required int UserId { get; init; }

    public required IEnumerable<Movie> Movies { get; init; } = Enumerable.Empty<Movie>();
}


//public class User
//{
//    public int UserId { get; set; } // Primary Key
//    public string UserName { get; set; } = string.Empty;
//    public string Email { get; set; } = string.Empty;

//    // Navigation Property
//    public ICollection<Watchlist> Watchlists { get; set; } = new List<Watchlist>();
//}

//public class Watchlist
//{
//    public int WatchlistId { get; set; } // Primary Key
//    public string Name { get; set; } = string.Empty;
//    public string Description { get; set; } = string.Empty;
//    public int UserId { get; set; } // Foreign Key to User

//    // Navigation Properties
//    public User User { get; set; } = null!;
//    public ICollection<Movie> Movies { get; set; } = new List<Movie>();
//}

//public class Movie
//{
//    public int Id { get; set; } // Primary Key
//    public string Title { get; set; } = string.Empty;
//    public string Genre { get; set; } = string.Empty;
//    public DateTime ReleaseDate { get; set; }

//    //// Navigation Property
//    //public ICollection<Watchlist> Watchlists { get; set; } = new List<Watchlist>();
//}

//// Join entity to represent many-to-many relationship between Watchlists and Movies
//public class WatchlistMovie
//{
//    public int WatchlistId { get; set; } // Composite Key Part 1
//    public int MovieId { get; set; } // Composite Key Part 2

//    // Navigation Properties
//    public Watchlist Watchlist { get; set; } = null!;
//    public Movie Movie { get; set; } = null!;
//}
