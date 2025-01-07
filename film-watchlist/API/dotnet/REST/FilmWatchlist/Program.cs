//private readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

using EFSampleSQLiteApp.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.





builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin", builder =>
        {
            builder.WithOrigins(
    "http://localhost:4200",
    "https://localhost:4200"
    )
    .AllowAnyHeader()
    .AllowAnyMethod()
    .AllowCredentials();
        });
});

builder.Services.AddControllers();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("Data Source=KachuraWatchlists.db")));

var app = builder.Build();

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors("AllowOrigin");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();



// TODO: Improve API overall - add authentication, authorisation, request/response etc. See dometain API course/code for reference

// TODO: Add integration tests - see asp.net core course