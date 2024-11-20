using FilmWatchlist.Api;
using FilmWatchlist.Application.Models;
using FilmWatchlist.Application.Repositories;
using FilmWatchlist.Contracts.Requests;
using Microsoft.AspNetCore.Mvc;
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
        await _watchlistRepository.CreateAsync(watchlist);
        var watchlistResponse = watchlist.MapToResponse();
        return CreatedAtAction(nameof(Get), new { id = watchlist.Id }, watchlistResponse);
    }

    [HttpGet(ApiEndpoints.FilmWatchlist.Get)]
    public async Task<IActionResult> Get([FromRoute] int id)
    {
        Watchlist? watchlist = await _watchlistRepository.GetByIdAsync(id);
        if (watchlist is null)
        {
            return NotFound();
        }

        var response = watchlist.MapToResponse();
        return Ok(response);
    }


    [HttpGet(ApiEndpoints.FilmWatchlist.GetAll)]
    public async Task<IActionResult> GetAll()
    {
        var watchlists = await _watchlistRepository.GetAllAsync();

        var watchlistsResponse = watchlists.MapToResponse();
        return Ok(watchlistsResponse);
    }

    //[HttpGet(ApiEndpoints.FilmWatchlist.GetAll)]
    //public async Task<IActionResult> GetAll()
    //{
    //    // add some fake watchlist data and return it
    //    var watchlist = new List<WatchlistResponse>
    //    {
    //        new WatchlistResponse
    //        {
    //            Id = 1,
    //            Name = "Watchlist 1",
    //            Description = "Description 1",
    //            UserId = 1,
    //            Movies = new List<Movie>
    //            {
    //                new Movie { Title = "Movie 1" },
    //                new Movie { Title = "Movie 2" },
    //                new Movie { Title = "Movie 3" }
    //            }
    //        },
    //        new WatchlistResponse
    //        {
    //            Id = 2,
    //            Name = "Watchlist 2",
    //            Description = "YADA Description 2",
    //            UserId = 2,
    //            Movies = new List<Movie>
    //            {
    //                new Movie { Title = "Movie 4" },
    //                new Movie { Title = "Movie 5" },
    //                new Movie { Title = "Movie 6" }
    //            }
    //        }
    //    };
    //    return Ok(watchlist);
    //}

    //[HttpPut(ApiEndpoints.Movies.Update)]
    //public async Task<IActionResult> Update([FromRoute]Guid id,
    //    [FromBody]UpdateMovieRequest request)
    //{
    //    var movie = request.MapToMovie(id);
    //    var updated = await _watchlistRepository.UpdateAsync(movie);
    //    if (!updated)
    //    {
    //        return NotFound();
    //    }

    //    var response = movie.MapToResponse();
    //    return Ok(response);
    //}

    //[HttpDelete(ApiEndpoints.Movies.Delete)]
    //public async Task<IActionResult> Delete([FromRoute] Guid id)
    //{
    //    var deleted = await _watchlistRepository.DeleteByIdAsync(id);
    //    if (!deleted)
    //    {
    //        return NotFound();
    //    }

    //    return Ok();
    //}
}
