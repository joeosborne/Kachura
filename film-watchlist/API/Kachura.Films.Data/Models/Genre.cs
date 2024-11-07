using System.Collections.Generic;

namespace Kachura.Films.Data.Models
{
  public class Genre
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }

    public ICollection<Film_Genre> FilmGenres { get; set; }
  }
}
