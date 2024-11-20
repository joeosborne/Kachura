using FilmWatchlist.Api;
using Microsoft.AspNetCore.Mvc;
//using Movies.Api.Mapping;
//using Movies.Application.Repositories;
//using Movies.Contracts.Requests;

namespace Movies.Api.Controllers;

[ApiController]
public class WatchlistController : ControllerBase
{
    //private readonly IMovieRepository _movieRepository;

    //public MoviesController(IMovieRepository movieRepository)
    //{
    //    _movieRepository = movieRepository;
    //}

    //[HttpPost(ApiEndpoints.Movies.Create)]
    //public async Task<IActionResult> Create([FromBody]CreateMovieRequest request)
    //{
    //    var movie = request.MapToMovie();
    //    await _movieRepository.CreateAsync(movie);
    //    var movieResponse = movie.MapToResponse();
    //    return CreatedAtAction(nameof(Get), new { id = movie.Id }, movieResponse);
    //}

    //[HttpGet(ApiEndpoints.Movies.Get)]
    //public async Task<IActionResult> Get([FromRoute] Guid id)
    //{
    //    var movie = await _movieRepository.GetByIdAsync(id);
    //    if (movie is null)
    //    {
    //        return NotFound();
    //    }

    //    var response = movie.MapToResponse();
    //    return Ok(response);
    //}

    [HttpGet(ApiEndpoints.FilmWatchlist.GetAll)]
    public async Task<IActionResult> GetAll()
    {
        // add some fake watchlist data and return it
        var watchlist = new List<WatchlistResponse>
        {
            new WatchlistResponse
            {
                Id = 1,
                Name = "Watchlist 1",
                Description = "Description 1",
                UserId = 1,
                Movies = new List<Movie>
                {
                    new Movie { Title = "Movie 1" },
                    new Movie { Title = "Movie 2" },
                    new Movie { Title = "Movie 3" }
                }
            },
            new WatchlistResponse
            {
                Id = 2,
                Name = "Watchlist 2",
                Description = "YADA Description 2",
                UserId = 2,
                Movies = new List<Movie>
                {
                    new Movie { Title = "Movie 4" },
                    new Movie { Title = "Movie 5" },
                    new Movie { Title = "Movie 6" }
                }
            }
        };
        return Ok(watchlist);
    }

    //[HttpPut(ApiEndpoints.Movies.Update)]
    //public async Task<IActionResult> Update([FromRoute]Guid id,
    //    [FromBody]UpdateMovieRequest request)
    //{
    //    var movie = request.MapToMovie(id);
    //    var updated = await _movieRepository.UpdateAsync(movie);
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
    //    var deleted = await _movieRepository.DeleteByIdAsync(id);
    //    if (!deleted)
    //    {
    //        return NotFound();
    //    }

    //    return Ok();
    //}
}
