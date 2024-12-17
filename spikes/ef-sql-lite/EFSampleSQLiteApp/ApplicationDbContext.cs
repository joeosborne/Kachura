using Microsoft.EntityFrameworkCore;

namespace EFSampleSQLiteApp.Models
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Watchlist> Watchlists { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<WatchlistMovie> WatchlistMovies { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=KachuraWatchlists.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure composite key for the junction table
            modelBuilder.Entity<WatchlistMovie>()
                .HasKey(wm => new { wm.WatchlistId, wm.MovieId });

            // Configure relationships
            modelBuilder.Entity<WatchlistMovie>()
                .HasOne(wm => wm.Watchlist)
                .WithMany(w => w.WatchlistMovies)
                .HasForeignKey(wm => wm.WatchlistId);

            modelBuilder.Entity<WatchlistMovie>()
                .HasOne(wm => wm.Movie)
                .WithMany(m => m.WatchlistMovies)
                .HasForeignKey(wm => wm.MovieId);
        }
    }
}
