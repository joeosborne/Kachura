using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;

namespace Osborne.Robotics.Services
{
    public class ForkliftFleetService : IForkliftFleetService
    {
        private readonly IForkliftRepository _forkliftRepository;

        public ForkliftFleetService(IForkliftRepository forkliftRepository)
        {
            _forkliftRepository = forkliftRepository;

            var fake = new List<Forklift>
            {
                new("1428 Forklift A", "Model-123",  new DateOnly(2022, 1, 11)),
                new ("Forklift B", "Model-234", new DateOnly(2018, 5, 12)),
                new ("Forklift C", "Model-345", new DateOnly(2021, 6, 4)),
                new ("Forklift YADA", "Model-345", new DateOnly(2024, 1, 15)),
                new ("Forklift D", "Model-456", new DateOnly(2017, 10, 30))
            };
            _forkliftRepository.ReplaceFleetAsync(fake);
        }
        public async Task<IList<Forklift>> GetForkliftFleet()
        {
            var response = await _forkliftRepository.GetAllAsync();

            DateTime today = DateTime.Today;
            foreach (var forklift in response)
            {
                forklift.Age = today.Year - forklift.ManufacturingDate.Year;
            }

            return response.ToList();
        }

        public Task<bool> ReplaceForkliftFleet(IList<Forklift> fleet)
        {
            return _forkliftRepository.ReplaceFleetAsync(fleet);
        }

        /*
using System.Text.Json;

public class JsonUploadService
{
    private const string JsonContentType = "application/json";

    public async Task<IResult> ProcessJsonUpload<T>(
        HttpRequest request,
        Func<IList<T>, Task<bool>> replaceDataCallback,
        Func<Task<IList<T>>> getDataCallback,
        string successMessage,
        string failedMissingFileMessage,
        string failedInvalidFileTypeMessage,
        string failedProcessingErrorMessage)
    {
        // Check for form content and file
        if (!request.HasFormContentType || request.Form.Files.Count == 0)
        {
            return Results.BadRequest(failedMissingFileMessage);
        }

        var file = request.Form.Files[0];
        if (file.ContentType != JsonContentType)
        {
            return Results.BadRequest(failedInvalidFileTypeMessage);
        }

        try
        {
            using var stream = file.OpenReadStream();
            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };

            var data = await JsonSerializer.DeserializeAsync<IList<T>>(stream, options);

            if (data != null)
            {
                bool replaceSuccess = await replaceDataCallback(data);
                if (replaceSuccess)
                {
                    var resultData = await getDataCallback();
                    return Results.Ok(new
                    {
                        Message = successMessage,
                        Data = resultData,
                        TotalItems = resultData?.Count ?? 0
                    });
                }
            }

            return Results.Problem(failedProcessingErrorMessage);
        }
        catch (Exception ex)
        {
            return Results.Problem($"{failedProcessingErrorMessage}: {ex.Message}");
        }
    }
}
         
         */

    }
}


