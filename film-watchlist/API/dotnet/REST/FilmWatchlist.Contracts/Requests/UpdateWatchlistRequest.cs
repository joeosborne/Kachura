using FilmWatchlist.EFCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmWatchlist.Contracts.Requests
{
    public class UpdateWatchlistRequest
    {

        //public required int Id { get; init; }

        public required string Name { get; init; }

        public string Description { get; init; }

        public required int UserId { get; init; }

        public required IEnumerable<Movie> Movies { get; init; } = Enumerable.Empty<Movie>();
    }
}
