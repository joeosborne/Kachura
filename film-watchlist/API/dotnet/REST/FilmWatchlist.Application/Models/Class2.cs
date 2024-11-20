using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmWatchlist.Application.Models
{
    public class Movie
    {
        public int Id { get; set; } // Primary Key
        public string Title { get; set; } = string.Empty;
        public string Genre { get; set; } = string.Empty;
        public DateTime ReleaseDate { get; set; }

        //// Navigation Property
        //public ICollection<Watchlist> Watchlists { get; set; } = new List<Watchlist>();
    }
}
