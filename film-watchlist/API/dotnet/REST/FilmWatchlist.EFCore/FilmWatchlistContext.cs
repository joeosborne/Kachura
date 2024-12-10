using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmWatchlist.EFCore
{
    public class FilmWatchlistContext : DbContext
    {

        public FilmWatchlistContext()
        {
            
        }
        public FilmWatchlistContext(DbContextOptions<FilmWatchlistContext> options)
    : base(options)
        {
        }


        public DbSet<Movie> Movies { get; set; }
        public DbSet<Watchlist> Watchlists { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //string filePath = "Data Source=FilmWatchlist.db";
            //Console.WriteLine($"Using SQLite Database File Path: {filePath}");
            //optionsBuilder.UseSqlite(filePath);
            //Console.WriteLine($"Current Directory: {Environment.CurrentDirectory}");
            //optionsBuilder.UseSqlite("Data Source=FilmWatchlist.db");


            //string databaseFile = "FilmWatchlist.db";
            //string path = Path.Combine(
            //  Environment.CurrentDirectory, databaseFile);

            string connectionString = $"Data Source=FilmWatchlist.db";
            //WriteLine($"Connection: {connectionString}");


            optionsBuilder.UseSqlite(connectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Movie>().ToTable("Movies");
            modelBuilder.Entity<Watchlist>().ToTable("Watchlists");
            //modelBuilder.Entity<WatchlistMovie>().ToTable("WatchlistMovie");
            // Define many-to-many relationship
            modelBuilder.Entity<Watchlist>()
                .HasMany(w => w.Movies)
                .WithMany()
                .UsingEntity(j => j.ToTable("WatchlistMovie"));
        }
    }

}
