using Microsoft.Extensions.Caching.Hybrid;
using Microsoft.Extensions.Caching.Memory;

var builder = WebApplication.CreateBuilder(args);

//builder.Services.AddMemoryCache(
#pragma warning disable EXTEXP0018
builder.Services.AddHybridCache();
#pragma warning restore EXTEXP0018

var app = builder.Build();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weather", async (string city, HybridCache hybridCache) =>
    {
        var response = await hybridCache.GetOrCreateAsync(city,
         ct => ValueTask.FromResult(CreateResponse()),
         new HybridCacheEntryOptions{ Expiration = TimeSpan.FromMinutes(5)});

        return Results.Ok(response);
        
        WeatherResponse CreateResponse()
        {
            var forecast = Enumerable.Range(1, 5).Select(index =>
                    new WeatherForecast
                    (
                        DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                        Random.Shared.Next(-20, 55),
                        summaries[Random.Shared.Next(summaries.Length)]
                    ))
                .ToArray();

            return new WeatherResponse(city, forecast);
        }
    })
    .WithName("GetWeatherForecast");

app.Run();

record WeatherResponse(string City, WeatherForecast[] Days);

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
