using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmWatchlist.EFCore
{
    using Microsoft.EntityFrameworkCore;

    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Genre { get; set; } = string.Empty;
        public string Overview { get; set; } = string.Empty;
        public string ReleaseDate { get; set; } = string.Empty; // ISO 8601 format
        public string PosterPath { get; set; } = string.Empty;
    }

    public class Watchlist
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int UserId { get; set; }

        // Navigation property
        public ICollection<Movie> Movies { get; set; } = new List<Movie>();
    }

}
