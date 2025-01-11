using Microsoft.Extensions.Caching.Memory;
using System.Text.Json;

const string CorsPolicyName = "OsborneRoboticsUI";
const string ForkliftCacheKey = "forklift-fleet";
const string ForkliftsNotFoundMsg = "No forklifts found.";
const string ImportMsgFailedInvallidFileType = "Invalid file type. Please upload a JSON file.";
const string ImportMsgFailedMissingFile = "No file uploaded.";
const string ImportMsgFailedProcessingError = "Error processing file";
const string ImportMsgSuccess = "Forklift data uploaded and processed successfully.";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    //TODO: Put local host url for UI into config along with other environment
    //urls (for DEV, TEST, PROD etc). If deployed to the cloud, CORS values may
    //also be required there.
    options.AddPolicy(CorsPolicyName, policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});


builder.Services.AddMemoryCache();
var app = builder.Build();

app.UseCors(CorsPolicyName);

// todo: clean up endpoints
// todo: etract logic into svc
app.MapGet("/forklift-fleet", (IMemoryCache cache) =>
{
    string cacheKey = ForkliftCacheKey;
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
            new ("Forklift B", "Model-234", new DateOnly(2018, 5, 12)),
            new ("Forklift C", "Model-345", new DateOnly(2021, 6, 4)),
            new ("Forklift YADA", "Model-345", new DateOnly(2024, 1, 15)),
            new ("Forklift D", "Model-456", new DateOnly(2017, 10, 30))
        };
    }

    if (response == null || response.Count == 0)
    {
        return Results.NotFound(ForkliftsNotFoundMsg);
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
        return Results.BadRequest(ImportMsgFailedMissingFile);
    }

    var file = request.Form.Files[0];
    if (file.ContentType != "application/json")
    {
        return Results.BadRequest(ImportMsgFailedInvallidFileType);
    }

    try
    {
        using var stream = file.OpenReadStream();
        var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };

        var forklifts = await JsonSerializer.DeserializeAsync<List<Forklift>>(stream, options);

        if (!cache.TryGetValue(ForkliftCacheKey, out List<Forklift> cachedValue))
        {
            // If not in cache, generate the data
            cachedValue = forklifts;

            // Set cache options (e.g., expiration)
            var cacheEntryOptions = new MemoryCacheEntryOptions()
                .SetSlidingExpiration(TimeSpan.FromMinutes(10)); //todo:

            // Save data in cache
            cache.Set(ForkliftCacheKey, cachedValue, cacheEntryOptions);
        }
        
        // todo: change to return the updated list here
        return Results.Ok(new
        {
            Message = ImportMsgSuccess,
            TotalItems = forklifts?.Count ?? 0
        });
    }
    catch (Exception ex)
    {
        return Results.Problem($"{ImportMsgFailedProcessingError}:{ex.Message}");
    }
});


app.Run();









