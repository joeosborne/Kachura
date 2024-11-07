using System;
using System.Collections.Generic;

namespace Kachura.Films.Data.Models
{
  public class FilmList
  {
    public int Id { get; set; }
    public int UserId { get; set; }
    public string Name { get; set; }
    public DateTime CreationDate { get; set; }

    public User User { get; set; }
    public ICollection<FilmList_Film> FilmListFilms { get; set; }
  }
}
