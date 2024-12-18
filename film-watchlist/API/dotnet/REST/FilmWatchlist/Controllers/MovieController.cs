using EFSampleSQLiteApp.Models;
using FilmWatchlist.Application.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FilmWatchlist.Api.Controllers;

[ApiController]
public class MovieController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public MovieController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost(ApiEndpoints.Film.Create)]
    public async Task<IActionResult> Create([FromBody] Movie Movie)
    {
        await _context.Movies.AddAsync(Movie);

        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(Get), new { id = Movie.Id }, Movie);
    }

    [HttpGet(ApiEndpoints.Film.Get)]
    public async Task<IActionResult> Get([FromRoute] int id)
    {
        // Fetch the Movie and include associated movies
        var movie = await _context.Movies
            .FirstOrDefaultAsync(w => w.Id == id);

        if (movie == null)
            return NotFound(new { message = "Movie not found" });

        return Ok(movie);
    }


    [HttpGet(ApiEndpoints.Film.GetAll)]
    public async Task<IActionResult> GetAll()
    {
        var Movies = await _context.Movies
            .AsNoTracking()
            .ToListAsync();

        return Ok(Movies);
    }


    [HttpPut(ApiEndpoints.Film.Update)]
    public async Task<IActionResult> Update([FromRoute] int id, [FromBody] Movie movie)
    {
        var existingMovie = await _context.Movies.FindAsync(id);

        if (existingMovie is null)
            return NotFound();

        existingMovie.Title = movie.Title;
        existingMovie.ReleaseDate = movie.ReleaseDate;
        existingMovie.PosterPath = movie.PosterPath;
        existingMovie.Overview = movie.Overview;

        await _context.SaveChangesAsync();

        return Ok(id);
    }


    [HttpDelete(ApiEndpoints.Film.Delete)]
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        var existingMovie = await _context.Movies.FindAsync(id);

        if (existingMovie is null)
            return NotFound();

        _context.Movies.Remove(existingMovie);

        await _context.SaveChangesAsync();

        return Ok();
    }

}
