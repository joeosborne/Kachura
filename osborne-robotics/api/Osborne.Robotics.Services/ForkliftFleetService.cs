using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;

namespace Osborne.Robotics.Services
{
    public class ForkliftFleetService : IForkliftFleetService
    {
        // todo: de-dupe
        const string ForkliftCacheKey = "forklift-fleet";


        private readonly IMemoryCache _memoryCache;

        public ForkliftFleetService(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }
        public IList<Forklift> GetForkliftFleet()
        {
            //app.MapGet("/forklift-fleet", (IMemoryCache cache) =>
            //{
            string cacheKey = ForkliftCacheKey;
            List<Forklift> response;
            if (_memoryCache.TryGetValue(cacheKey, out List<Forklift> cachedValue))
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

            DateTime today = DateTime.Today;
            foreach (var forklift in response)
            {
                forklift.Age = today.Year - forklift.ManufacturingDate.Year;
            }

            return response;
        }
    }
}
