namespace Kachura.Films.Data.Models
{
  public class FilmList_Film
  {
    public int FilmListId { get; set; }
    public int FilmId { get; set; }

    public FilmList FilmList { get; set; }
    public Film Film { get; set; }
  }
}
