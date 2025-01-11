using Microsoft.Extensions.Caching.Memory;
using System.Collections.Generic;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("OsborneRoboticsUI", policy =>
    {
        policy.WithOrigins("http://localhost:4200") // todo:
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});


builder.Services.AddMemoryCache();
var app = builder.Build();

app.UseCors("OsborneRoboticsUI");


app.MapGet("/forklift-fleet", (IMemoryCache cache) =>
{
    string cacheKey = "forklift-fleet";
    List<Forklift> response;
    if (cache.TryGetValue(cacheKey, out List<Forklift> cachedValue))
    {
        response = cachedValue;
    }
    else
    {
        response = new List<Forklift>
        {
            new("Forklift A", "Model-123",  new DateOnly(2022, 1, 11)),
            new Forklift("Forklift B", "Model-234", new DateOnly(2018, 5, 12)),
            new Forklift("Forklift C", "Model-345", new DateOnly(2021, 6, 4)),
            new Forklift("Forklift YADA", "Model-345", new DateOnly(2024, 1, 15)),
            new Forklift("Forklift D", "Model-456", new DateOnly(2017, 10, 30))
        };
    }

    if (response == null || response.Count == 0)
    {
        return Results.NotFound("No forklifts found.");
    }


    DateTime today = DateTime.Today;
    foreach (var forklift in response)
    {
        forklift.Age = today.Year - forklift.ManufacturingDate.Year;
    }

    return Results.Ok(response);
});




app.MapPost("/upload-json", async (IMemoryCache cache, HttpRequest request) =>
{
    // todo: add guards to both methods
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

        var forklifts = await JsonSerializer.DeserializeAsync<List<Forklift>>(stream, options);

        string cacheKey = "forklift-fleet";
        if (!cache.TryGetValue(cacheKey, out List<Forklift> cachedValue))
        {
            // If not in cache, generate the data
            cachedValue = forklifts;

            // Set cache options (e.g., expiration)
            var cacheEntryOptions = new MemoryCacheEntryOptions()
                .SetSlidingExpiration(TimeSpan.FromHours(1)); //todo:

            // Save data in cache
            cache.Set(cacheKey, cachedValue, cacheEntryOptions);
        }
        

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






// todo:

//Create an API endpoint to return the forklift list.
//Display the following details for each forklift in the UI:
//Name
//Model Number
//Manufacturing Date
//Age (calculated from the Manufacturing Date)

// todo:
//DateTime today = DateTime.Today;
//int age = today.Year - theDate.Year;


//Ensure that each forklift's age is accurately calculated in whole years based on the
//current date.

//The maintenance team should be able to easily spot forklifts needing repairs or service from
//the displayed list.
