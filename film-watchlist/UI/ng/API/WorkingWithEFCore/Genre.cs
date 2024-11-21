using System;
using System.Collections.Generic;

namespace WorkingWithEFCore;

public partial class Genre
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Description { get; set; }
}
