using FilmWatchlist.Api;
using FilmWatchlist.Application.Models;
using FilmWatchlist.Application.Repositories;
using FilmWatchlist.Contracts.Requests;
using FilmWatchlist.EFCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using Movies.Api.Mapping;
//using Movies.Application.Repositories;
//using Movies.Contracts.Requests;

namespace FilmWatchlist.Api.Controllers;

[ApiController]
public class WatchlistController : ControllerBase
{
    // use  using DI



    private readonly IWatchlistRepository _watchlistRepository;

    public WatchlistController(IWatchlistRepository watchlistRepository)
    {
        _watchlistRepository = watchlistRepository;
    }

    [HttpPost(ApiEndpoints.FilmWatchlist.Create)]
    public async Task<IActionResult> Create([FromBody] CreateWatchlistRequest request)
    {
        var watchlist = request.MapToWatchlist();

        using FilmWatchlistContext db = new();
        db.Watchlists.Add(watchlist);
        await db.SaveChangesAsync();

        var watchlistResponse = watchlist.MapToResponse();

        return CreatedAtAction(nameof(Get), new { id = watchlist.Id }, watchlistResponse);
    }

    [HttpGet(ApiEndpoints.FilmWatchlist.Get)]
    public async Task<IActionResult> Get([FromRoute] int id)
    {
        throw new NotImplementedException();
        //Watchlist? watchlist = await _watchlistRepository.GetByIdAsync(id);
        //if (watchlist is null)
        //{
        //    return NotFound();
        //}

        //var response = watchlist.MapToResponse();
        //return Ok(response);
    }


    [HttpGet(ApiEndpoints.FilmWatchlist.GetAll)]
    public async Task<IActionResult> GetAll()
    {
        using FilmWatchlistContext db = new();
        
        var watchlists = db.Watchlists.ToList();
        
        var watchlistsResponse = watchlists.MapToResponse();
        return Ok(watchlistsResponse);
    }


    [HttpPut(ApiEndpoints.FilmWatchlist.Update)]
    public async Task<IActionResult> Update([FromRoute] int id,
        [FromBody] UpdateWatchlistRequest request)
    {
        var watchlist = request.MapToWatchlist(id);
        var updated = await _watchlistRepository.UpdateAsync(watchlist);
        if (!updated)
        {
            return NotFound();
        }

        var response = watchlist.MapToResponse();
        return Ok(response);
    }

    [HttpDelete(ApiEndpoints.FilmWatchlist.Delete)]
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        var deleted = await _watchlistRepository.DeleteByIdAsync(id);
        if (!deleted)
        {
            return NotFound();
        }

        return Ok();
    }
}
