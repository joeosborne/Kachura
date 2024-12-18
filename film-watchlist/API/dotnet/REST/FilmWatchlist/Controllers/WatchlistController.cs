using EFSampleSQLiteApp.Models;
using FilmWatchlist.Application.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FilmWatchlist.Api.Controllers;

public class AddMovieToWatchlistDto
{
    public int MovieId { get; set; }
}

[ApiController]
public class WatchlistController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public WatchlistController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost(ApiEndpoints.FilmWatchlist.Create)]
    public async Task<IActionResult> Create([FromBody] Watchlist watchlist)
    {
        await _context.Watchlists.AddAsync(watchlist);

        // movie has no ID

        await _context.SaveChangesAsync();

        // movie has an ID

        return CreatedAtAction(nameof(Get), new { id = watchlist.Id }, watchlist);
    }

    [HttpGet(ApiEndpoints.FilmWatchlist.Get)]
    public async Task<IActionResult> Get([FromRoute] int id)
    {
        // Fetch the watchlist and include associated movies
        var watchlist = await _context.Watchlists
            .Include(w => w.WatchlistMovies)
            .ThenInclude(wm => wm.Movie)
            .FirstOrDefaultAsync(w => w.Id == id);

        // Check if the watchlist exists
        if (watchlist == null)
            return NotFound(new { message = "Watchlist not found" });

        // Map data into a response-friendly format
        var response = new
        {
            watchlist.Id,
            watchlist.Name,
            watchlist.Description,
            Movies = watchlist.WatchlistMovies.Select(wm => new
            {
                wm.Movie.Id,
                wm.Movie.Title,
                wm.Movie.ReleaseDate,
                wm.Movie.PosterPath,
                wm.Movie.Overview
            }).ToList()
        };

        return Ok(response);
    }


    [HttpGet(ApiEndpoints.FilmWatchlist.GetAll)]
    public async Task<IActionResult> GetAll()
    {
        var watchlists = await _context.Watchlists
            .AsNoTracking()
            .ToListAsync();

        return Ok(watchlists);
    }

    // POST: api/watchlists/{watchlistId}/movies
    [HttpPost("api/watchlist/{watchlistId}/movies")]
    public async Task<IActionResult> AddMovieToWatchlist(int watchlistId, [FromBody] AddMovieToWatchlistDto dto)
    {
        int movieId = dto.MovieId;
        // Validate Watchlist existence
        var watchlist = await _context.Watchlists.FindAsync(watchlistId);
        if (watchlist == null)
            return NotFound(new { message = "Watchlist not found" });

        // Validate Movie existence
        var movie = await _context.Movies.FindAsync(movieId);
        if (movie == null)
            return NotFound(new { message = "Movie not found" });

        // Check if the movie is already in the watchlist
        var exists = await _context.WatchlistMovies
            .AnyAsync(wm => wm.WatchlistId == watchlistId && wm.MovieId == movieId);

        if (exists)
            return BadRequest(new { message = "Movie is already in the watchlist" });

        // Add the movie to the watchlist
        var watchlistMovie = new WatchlistMovie
        {
            WatchlistId = watchlistId,
            MovieId = movieId
        };

        _context.WatchlistMovies.Add(watchlistMovie);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Movie added to the watchlist" });
    }

    [HttpDelete("api/watchlist/{watchlistId}/movies")]
    public async Task<IActionResult> RemoveMovieToWatchlist(int watchlistId, [FromBody] AddMovieToWatchlistDto dto)
    {
        // todo: de-dupe code copied from add
        int movieId = dto.MovieId;
        // Validate Watchlist existence
        var watchlist = await _context.Watchlists.FindAsync(watchlistId);
        if (watchlist == null)
            return NotFound(new { message = "Watchlist not found" });

        // Validate Movie existence
        var movie = await _context.Movies.FindAsync(movieId);
        if (movie == null)
            return NotFound(new { message = "Movie not found" });

        // Check if the movie is already in the watchlist
        var exists = await _context.WatchlistMovies
            .AnyAsync(wm => wm.WatchlistId == watchlistId && wm.MovieId == movieId);

        if (exists)
        {
            // Add the movie to the watchlist
            var watchlistMovie = new WatchlistMovie
            {
                WatchlistId = watchlistId,
                MovieId = movieId
            };

            _context.WatchlistMovies.Remove(watchlistMovie);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Movie removed to the watchlist" });
        }
        return Ok(new { message = "Movie was not part of the watchlist" });

    }



    [HttpPut(ApiEndpoints.FilmWatchlist.Update)]
    public async Task<IActionResult> Update([FromRoute] int id, [FromBody] Watchlist watchlist)
    {
        var existingWatchlist = await _context.Watchlists.FindAsync(id);

        if (existingWatchlist is null)
            return NotFound();

        if (!string.IsNullOrEmpty(watchlist.Name)){
            existingWatchlist.Name = watchlist.Name;
        }
        existingWatchlist.Description = watchlist.Description;

        await _context.SaveChangesAsync();

        return Ok(id);
    }


    [HttpDelete(ApiEndpoints.FilmWatchlist.Delete)]
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        var existingWatchlist = await _context.Watchlists.FindAsync(id);

        if (existingWatchlist is null)
            return NotFound();

        _context.Watchlists.Remove(existingWatchlist);

        await _context.SaveChangesAsync();

        return Ok();
    }
}
