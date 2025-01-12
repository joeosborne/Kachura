using Microsoft.Extensions.Caching.Memory;
using Microsoft.Win32;
using Osborne.Robotics.Services;
using System;
using System.Runtime.CompilerServices;
using System.Text.Json;

const string CorsPolicyName = "OsborneRoboticsUI";

// todo: de-dupe
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


// TODO: Maybe restore and introduce IMemoryCache cache usage
// builder.Services.AddMemoryCache();
builder.Services.AddSingleton<IForkliftFleetService, ForkliftFleetService>();
builder.Services.AddSingleton<IForkliftRepository, ForkliftRepository>();

var app = builder.Build();

app.UseCors(CorsPolicyName);

/* todo: clean up endpoints
rename forklift-fleet to fleet
*/

app.MapGet("/forklift-fleet", async (IForkliftFleetService forkliftFleetService) =>
{
    var response = await forkliftFleetService.GetForkliftFleet();

    if (response == null || response.Count == 0)
    {
        return Results.NotFound(ForkliftsNotFoundMsg);
    }

    return Results.Ok(response);
});

// todo: ProcessForkliftJsonImport
app.MapPost("/upload-json", async (IForkliftFleetService forkliftFleetService, HttpRequest request) =>
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
        return await ProcessForkliftJsonImport(forkliftFleetService, ImportMsgSuccess, file);
    }
    catch (Exception ex)
    {
        return Results.Problem($"{ImportMsgFailedProcessingError}:{ex.Message}");
    }
});


static async Task<IResult> ProcessForkliftJsonImport(IForkliftFleetService forkliftFleetService, string ImportMsgSuccess, IFormFile file)
{
    Stream stream = file.OpenReadStream();
    var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };

    var forklifts = await JsonSerializer.DeserializeAsync<IList<Forklift>>(stream, options);

    if (forklifts != null)
    {
        bool res = await forkliftFleetService.ReplaceForkliftFleet(forklifts);
        if (res)
        {
            forklifts = await forkliftFleetService.GetForkliftFleet();

            return Results.Ok(new
            {
                Message = ImportMsgSuccess,
                Forklifts = forklifts,
                TotalItems = forklifts?.Count ?? 0
            });
        }
    }
    return Results.Problem($"{ImportMsgFailedProcessingError}");
}

app.Run();















//todo:...
//public static class ServiceExtensions
//{
//    public static IServiceCollection AddMyAppServices(this IServiceCollection services)
//    {
//        services.AddMemoryCache();
//        services.AddScoped<MyCacheService>();
//        return services;
//    }
//}

// builder.Services.AddMyAppServices();
