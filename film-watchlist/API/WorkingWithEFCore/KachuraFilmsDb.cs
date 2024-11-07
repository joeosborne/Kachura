//using Microsoft.EntityFrameworkCore; // To use DbContext and so on.

//// To use RelationalEventId.
//using Microsoft.EntityFrameworkCore.Diagnostics;

//// This manages interactions with the Northwind database.
//public class KachuraFilmsDb : DbContext
//{
//  //// These two properties map to tables in the database.
//  public DbSet<Film>? Films { get; set; }
//  public DbSet<Genre>? Genres { get; set; }

//  protected override void OnConfiguring(
//    DbContextOptionsBuilder optionsBuilder)
//  {
//    string databaseFile = "KachuraFilm.db";
//    string path = Path.Combine(
//      Environment.CurrentDirectory, databaseFile);

//    string connectionString = $"Data Source={path}";
//    WriteLine($"Connection: {connectionString}");
//    optionsBuilder.UseSqlite(connectionString);

////    optionsBuilder.LogTo(WriteLine, // This is the Console method.
////      new[] { RelationalEventId.CommandExecuting })
////#if DEBUG
////      .EnableSensitiveDataLogging() // Include SQL parameters.
////      .EnableDetailedErrors()
////#endif
////    ;

////    optionsBuilder.UseLazyLoadingProxies();
//  }

//  protected override void OnModelCreating(
//    ModelBuilder modelBuilder)
//  {
//    // Example of using Fluent API instead of attributes
//    // to limit the length of a category name to 15.
//    modelBuilder.Entity<Film>()
//      .Property(film => film.title)
//      .IsRequired() // NOT NULL
//      .HasMaxLength(15);

//    // Some SQLite-specific configuration.
//    if (Database.ProviderName?.Contains("Sqlite") ?? false)
//    {
//      //// To "fix" the lack of decimal support in SQLite.
//      //modelBuilder.Entity<Product>()
//      //  .Property(product => product.Cost)
//      //  .HasConversion<double>();
//    }

//    // A global filter to remove discontinued products.
//    //modelBuilder.Entity<Product>()
//    //  .HasQueryFilter(p => !p.Discontinued);
//  }
//}
