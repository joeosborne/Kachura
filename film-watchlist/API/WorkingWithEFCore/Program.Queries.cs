using Microsoft.EntityFrameworkCore; // To use Include method.
using Northwind.EntityModels; // To use Northwind, Category, Product.
using Microsoft.EntityFrameworkCore.ChangeTracking;
using WorkingWithEFCore; // To use CollectionEntry.

partial class Program
{
  private static void GettingOneFilm()
  {
    using KachuraDb db = new();

    SectionTitle("Getting a single film");

    string? input;
    int id;

    do
    {
      Write("Enter a film ID: ");
      input = ReadLine();
    } while (!int.TryParse(input, out id));

    Film? film = db.Films?
      .First(product => product.Id == id);

    Info($"First: {film?.Title}");

    if (film is null) Fail("No film found using First.");

    film = db.Films?
      .Single(film => film.Id == id);

    Info($"Single: {film?.Title}");

    if (film is null) Fail("No film found using Single.");

  }

  private static void GettingAllGenres()
  {
    using KachuraDb db = new();

    SectionTitle("Getting all genres");
    // write out all genres from db
    foreach (var genre in db.Genres)
    {
      Info($"Genre: {genre.Name}");
    }
  }

}
