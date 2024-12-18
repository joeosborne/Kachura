using EFSampleSQLiteApp.Models;
using FilmWatchlist.Api;
using FilmWatchlist.Application.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using Movies.Api.Mapping;
//using Movies.Application.Repositories;
//using Movies.Contracts.Requests;

namespace FilmMovie.Api.Controllers;

[ApiController]
public class MovieController : ControllerBase
{
    // use  using DI



    private readonly ApplicationDbContext _context;

    public MovieController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost(ApiEndpoints.Film.Create)]
    public async Task<IActionResult> Create([FromBody] Movie Movie)
    {
        await _context.Movies.AddAsync(Movie);

        // movie has no ID

        await _context.SaveChangesAsync();

        // movie has an ID

        return CreatedAtAction(nameof(Get), new { id = Movie.Id }, Movie);
    }

    [HttpGet(ApiEndpoints.Film.Get)]
    public async Task<IActionResult> Get([FromRoute] int id)
    {
        var Movie = await _context.Movies
            .SingleOrDefaultAsync(m => m.Id == id);

        return Movie == null
            ? NotFound()
            : Ok(Movie);
    }


    [HttpGet(ApiEndpoints.Film.GetAll)]
    public async Task<IActionResult> GetAll()
    {
        //using FilmMovieContext db = new();

        //var Movies = db.Movies.ToList();

        //var MoviesResponse = Movies.MapToResponse();
        //return Ok(MoviesResponse);
        var Movies = await _context.Movies
            .AsNoTracking()
            .ToListAsync();

        return Ok(Movies);
    }


    //[HttpPut(ApiEndpoints.FilmMovie.Update)]
    //public async Task<IActionResult> Update([FromRoute] int id,
    //    [FromBody] UpdateMovieRequest request)
    //{
    //    var Movie = request.MapToMovie(id);
    //    var updated = await _MovieRepository.UpdateAsync(Movie);
    //    if (!updated)
    //    {
    //        return NotFound();
    //    }

    //    var response = Movie.MapToResponse();
    //    return Ok(response);
    //}

    //[HttpDelete(ApiEndpoints.FilmMovie.Delete)]
    //public async Task<IActionResult> Delete([FromRoute] int id)
    //{
    //    var deleted = await _MovieRepository.DeleteByIdAsync(id);
    //    if (!deleted)
    //    {
    //        return NotFound();
    //    }

    //    return Ok();
    //}
}
