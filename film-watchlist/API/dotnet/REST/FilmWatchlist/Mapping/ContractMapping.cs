
using FilmWatchlist.Application.Models;
using FilmWatchlist.Contracts.Requests;
using Movies.Contracts.Responses;

public static class ContractMapping
{
    public static Watchlist MapToWatchlist(this CreateWatchlistRequest request)
    {
        return new Watchlist
        {
            Id = 999,
            Name = request.Name,
            Description = request.Description,
            UserId = request.UserId,
            Movies = request.Movies.ToList()
        };
    }

    public static Watchlist MapToWatchlist(this UpdateWatchlistRequest request, int id)
    {
        return new Watchlist
        {
            Id = id,
            Name = request.Name,
            Description = request.Description,
            UserId = request.UserId,
            Movies = request.Movies.ToList()
        };
    }

    //public static Movie MapToMovie(this UpdateMovieRequest request, Guid id)
    //{
    //    return new Movie
    //    {
    //        Id = id,
    //        Title = request.Title,
    //        YearOfRelease = request.YearOfRelease,
    //        Genres = request.Genres.ToList()
    //    };
    //}

    public static WatchlistResponse MapToResponse(this Watchlist watchlist)
    {
        return new WatchlistResponse
        {
            Id = watchlist.Id,
            Name = watchlist.Name,
            Description = watchlist.Description,
            UserId = watchlist.UserId,
            Movies = watchlist.Movies.ToList()
        };
    }

    public static WatchlistsResponse MapToResponse(this IEnumerable<Watchlist> watchlists)
    {
        return new WatchlistsResponse
        {
            Items = watchlists.Select(MapToResponse)
        };
    }
}
