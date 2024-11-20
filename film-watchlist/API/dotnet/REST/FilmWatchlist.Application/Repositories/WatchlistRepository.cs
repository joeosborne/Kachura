using FilmWatchlist.Application.Models;
using FilmWatchlist.Application.Repositories;

namespace Watchlists.Application.Repositories;

public class WatchlistRepository : IWatchlistRepository
{
    private readonly List<Watchlist> _watchllist = new();

    public Task<bool> CreateAsync(Watchlist movie)
    {
        _watchllist.Add(movie);
        return Task.FromResult(true);
    }

    public Task<Watchlist?> GetByIdAsync(int id)
    {
        var movie = _watchllist.SingleOrDefault(x => x.Id == id);
        return Task.FromResult(movie);
    }

    public Task<IEnumerable<Watchlist>> GetAllAsync()
    {
        return Task.FromResult(_watchllist.AsEnumerable());
    }

    public Task<bool> UpdateAsync(Watchlist movie)
    {
        var movieIndex = _watchllist.FindIndex(x => x.Id == movie.Id);
        if (movieIndex == -1)
        {
            return Task.FromResult(false);
        }

        _watchllist[movieIndex] = movie;
        return Task.FromResult(true);
    }

    public Task<bool> DeleteByIdAsync(int id)
    {
        var removedCount = _watchllist.RemoveAll(x => x.Id == id);
        var movieRemoved = removedCount > 0; 
        return Task.FromResult(movieRemoved);
    }
}
