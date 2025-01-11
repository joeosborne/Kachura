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
    }
}
