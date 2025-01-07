using EFSampleSQLiteApp.Models;
using FilmWatchlist.Application.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FilmWatchlist.Api.Controllers;

[ApiController]
public class UserController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public UserController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost(ApiEndpoints.Film.Create)]
    public async Task<IActionResult> Create([FromBody] User User)
    {
        await _context.Users.AddAsync(User);

        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(Get), new { id = User.Id }, User);
    }

    [HttpGet(ApiEndpoints.Film.Get)]
    public async Task<IActionResult> Get([FromRoute] int id)
    {
        // Fetch the User and include associated Users
        var User = await _context.Users
            .FirstOrDefaultAsync(w => w.Id == id);

        if (User == null)
            return NotFound(new { message = "User not found" });

        return Ok(User);
    }


    [HttpGet(ApiEndpoints.Film.GetAll)]
    public async Task<IActionResult> GetAll()
    {
        var Users = await _context.Users
            .AsNoTracking()
            .ToListAsync();

        return Ok(Users);
    }


    [HttpPut(ApiEndpoints.Film.Update)]
    public async Task<IActionResult> Update([FromRoute] int id, [FromBody] User User)
    {
        var existingUser = await _context.Users.FindAsync(id);

        if (existingUser is null)
            return NotFound();

        existingUser.Title = User.Title;
        existingUser.ReleaseDate = User.ReleaseDate;
        existingUser.PosterPath = User.PosterPath;
        existingUser.Overview = User.Overview;

        await _context.SaveChangesAsync();

        return Ok(id);
    }


    
    // todo: add l ogical delete
    //[HttpDelete(ApiEndpoints.Film.Delete)]
    //public async Task<IActionResult> Delete([FromRoute] int id)
    //{
    //    var existingUser = await _context.Users.FindAsync(id);

    //    if (existingUser is null)
    //        return NotFound();

    //    _context.Users.Remove(existingUser);

    //    await _context.SaveChangesAsync();

    //    return Ok();
    //}

}
