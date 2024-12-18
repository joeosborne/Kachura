//private readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

using EFSampleSQLiteApp.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.





builder.Services.AddCors(options =>
{
    // todo: correct all of these settings
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


    //options.AddPolicy(
    //name: "AllowOrigin",
    //builder => {
    //    builder.AllowAnyOrigin()
    //            .AllowAnyMethod()
    //            .AllowAnyHeader();
    //});

});

builder.Services.AddControllers();
//builder.Services.AddApplication();

// Add the DbContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("Data Source=KachuraWatchlists.db")));

//builder.Services.AddDbContext<ApplicationDbContext>(optionsBuilder =>
//{
//    //var connectionString = builder.Configuration.GetConnectionString("MoviesContext");
//    var connectionString = "";
//    optionsBuilder
//        .UseSqlite(connectionString, sqlBuilder =>
//            sqlBuilder.MaxBatchSize(50))
//        .LogTo(Console.WriteLine);
//},
//    ServiceLifetime.Scoped,
//    ServiceLifetime.Singleton);

var app = builder.Build();

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors("AllowOrigin");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();
