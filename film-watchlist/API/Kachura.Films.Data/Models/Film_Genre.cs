namespace Kachura.Films.Data.Models
{
  public class Film_Genre
  {
    public int FilmId { get; set; }
    public int GenreId { get; set; }

    public Film Film { get; set; }
    public Genre Genre { get; set; }
  }
}
