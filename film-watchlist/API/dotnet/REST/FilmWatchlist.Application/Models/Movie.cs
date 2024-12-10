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
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Genre { get; set; } = string.Empty;
        public string Overview { get; set; } = string.Empty;
        public required string ReleaseDate { get; set; }// todo: change to date

        public string PosterPath { get; set; } = string.Empty;
    }
}
