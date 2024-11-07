using System;
using System.Threading.Tasks;
using Kachura.Films.Data.Models;
using Kachura.Films.Data;
using System.Diagnostics.Metrics;
using Northwind.EntityModels;

namespace KachuraFilmsApp
{
  class Program
  {
    static async Task Main(string[] args)
    {


        using var context = new NorthwindContext();

      var response = context.Customers.ToList();


      //      var filmRepo = new FilmRepository(context);

      //// Add a new film
      //var newFilm = new Film
      //{
      //  OriginalLanguage = "en",
      //  Title = "New Film",
      //  Genres = "Drama",
      //  Overview = "A sample film.",
      //  PercentageRating = 85,
      //  PosterPath = "/path/to/poster.jpg",
      //  ReleaseDate = DateTime.Now
      //};
      //await filmRepo.AddFilmAsync(newFilm);

      //// Retrieve all films
      //var films = await filmRepo.GetAllFilmsAsync();
      //foreach (var film in films)
      //{
      //  Console.WriteLine($"Film Title: {film.Title}, Language: {film.OriginalLanguage}");
      //}
    }
  }
}
