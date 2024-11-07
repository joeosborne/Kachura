using System;
using System.Collections.Generic;

namespace Kachura.Films.Data.Models
{
  public class Film
  {
    public int Id { get; set; }
    public string OriginalLanguage { get; set; }
    public string Title { get; set; }
    public string Genres { get; set; }
    public string Overview { get; set; }
    public float PercentageRating { get; set; }
    public string PosterPath { get; set; }
    public DateTime ReleaseDate { get; set; }

    public ICollection<Film_Genre> FilmGenres { get; set; }
    public ICollection<FilmList_Film> FilmListFilms { get; set; }
  }
}
