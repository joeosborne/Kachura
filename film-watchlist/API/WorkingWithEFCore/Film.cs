using System;
using System.Collections.Generic;

namespace WorkingWithEFCore;

public partial class Film
{
    public int Id { get; set; }

    public string OriginalLanguage { get; set; } = null!;

    public string Title { get; set; } = null!;

    public string? Genres { get; set; }

    public string? Overview { get; set; }

    public double? PercentageRating { get; set; }

    public string? PosterPath { get; set; }

    public DateOnly? ReleaseDate { get; set; }
}
