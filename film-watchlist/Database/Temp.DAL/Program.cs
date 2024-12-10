using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using Temp.DAL;

class Program
{
    static void Main()
    {

        //using (var context = new FilmWatchlistContext())
        //{
        //    var tables = context.Database.ExecuteSqlRaw("SELECT name FROM sqlite_master WHERE type='table';");
        //    Console.WriteLine(tables);
        //}


        //using FilmWatchlistContext db = new();
        //var tables = db.Database.ExecuteSqlRaw("SELECT name FROM sqlite_master WHERE type='table';");
        //db.Dispose();

        //SectionTitle("Products that cost more than a price, highest at top");

        //string? input;
        //decimal price;

        //do
        //{
        //    Write("Enter a product price: ");
        //    input = ReadLine();
        //} while (!decimal.TryParse(input, out price));

        //IQueryable<Product>? products = db.Products?
        //  .Where(product => product.Cost > price)
        //  .OrderByDescending(product => product.Cost);

        //if (products is null || !products.Any())
        //{


        using (var context = new FilmWatchlistContext())
        {
            var tables = context.Database.ExecuteSqlRaw("SELECT name FROM sqlite_master WHERE type='table';");
            Console.WriteLine(tables);

            //// Add a new movie
            //var movie = new Movie
            //{
            //    Title = "Fighht wr3fgk3m ",
            //    Genre = "Sci-Fi",
            //    Overview = "A mind-bending thriller.",
            //    ReleaseDate = "2010-07-16",
            //    PosterPath = "/path/to/pddddoster.jpg"
            //};
            //context.Movies.Add(movie);
            //context.SaveChanges();

            // Retrieve and display all movies
            var movies = context.Movies.ToList();
            foreach (var m in movies)
            {
                Console.WriteLine($"Title: {m.Title}, Genre: {m.Genre}");
            }
        }
    }
}
