using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
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
        public string Overview { get; set; } = string.Empty;
        public required string ReleaseDate { get; set; }// todo: change to date

        public string PosterPath { get; set; } = string.Empty;
        //       title: The Matrix
        //overview: Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.
        //releaseDate: 1999-03-31
        //posterPath: /p96dm7sCMn4VYAStA6siNz30G1r.jpg

        //// Navigation Property
        //public ICollection<Watchlist> Watchlists { get; set; } = new List<Watchlist>();
    }
}
