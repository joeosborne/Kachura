using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Endpoint for JSON file upload
app.MapPost("/upload-json", async (HttpRequest request) =>
{
    // Ensure the request contains a file
    if (!request.HasFormContentType || request.Form.Files.Count == 0)
    {
        return Results.BadRequest("No file uploaded.");
    }

    var file = request.Form.Files[0];
    if (file.ContentType != "application/json")
    {
        return Results.BadRequest("Invalid file type. Please upload a JSON file.");
    }

    try
    {
        using var stream = file.OpenReadStream();
        var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };

        // Deserialize the JSON into a dynamic object or a specific class
        var forklifts = await JsonSerializer.DeserializeAsync<List<Forklift>>(stream, options);

        // Add logic to process/import forklifts (e.g., save to a database)
        // For demonstration, we're just returning the count
        return Results.Ok(new
        {
            Message = "File uploaded and processed successfully.",
            TotalItems = forklifts?.Count ?? 0
        });
    }
    catch (Exception ex)
    {
        return Results.Problem($"Error processing file: {ex.Message}");
    }
});


app.Run();



//var builder = WebApplication.CreateBuilder(args);

//// Add services to the container.

//var app = builder.Build();

//// Configure the HTTP request pipeline.

//app.UseHttpsRedirection();

//var summaries = new[]
//{
//    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
//};

//app.MapGet("/weatherforecast", () =>
//{
//    var forecast = Enumerable.Range(1, 5).Select(index =>
//        new WeatherForecast
//        (
//            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
//            Random.Shared.Next(-20, 55),
//            summaries[Random.Shared.Next(summaries.Length)]
//        ))
//        .ToArray();
//    return forecast;
//});

//app.Run();

//internal record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
//{
//    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
//}
