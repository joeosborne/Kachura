using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WorkingWithEFCore;

public partial class KachuraDb : DbContext
{
    public KachuraDb()
    {
    }

    public KachuraDb(DbContextOptions<KachuraDb> options)
        : base(options)
    {
    }

    public virtual DbSet<Film> Films { get; set; }

    public virtual DbSet<Genre> Genres { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlite("Data Source=KachuraFilms.db");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Film>(entity =>
        {
            entity.ToTable("Film");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Genres).HasColumnName("genres");
            entity.Property(e => e.OriginalLanguage).HasColumnName("original_language");
            entity.Property(e => e.Overview).HasColumnName("overview");
            entity.Property(e => e.PercentageRating).HasColumnName("percentage_rating");
            entity.Property(e => e.PosterPath).HasColumnName("poster_path");
            entity.Property(e => e.ReleaseDate)
                .HasColumnType("DATE")
                .HasColumnName("release_date");
            entity.Property(e => e.Title).HasColumnName("title");
        });

        modelBuilder.Entity<Genre>(entity =>
        {
            entity.ToTable("Genre");

            entity.HasIndex(e => e.Name, "IX_Genre_name").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Description).HasColumnName("description");
            entity.Property(e => e.Name).HasColumnName("name");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
