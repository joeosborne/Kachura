
using FilmWatchlist.Application.Models;
using FilmWatchlist.EFCore;
namespace FilmWatchlist.Application.Repositories;

public interface IWatchlistRepository
{
    Task<bool> CreateAsync(Watchlist movie);
    
    Task<Watchlist?> GetByIdAsync(int id);
    
    Task<IEnumerable<Watchlist>> GetAllAsync();
    
    Task<bool> UpdateAsync(Watchlist movie);
    
    Task<bool> DeleteByIdAsync(int id);
}
