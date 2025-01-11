public class Forklift(string Name, string ModelNumber, DateOnly ManufacturingDate)
{
    // todo: clean up this type
    public int Age { get; set; }
    public string Name { get; } = Name;
    public string ModelNumber { get; } = ModelNumber;
    public DateOnly ManufacturingDate { get; } = ManufacturingDate;
}

/* todo:
 change type of ManufacturingDate
add unit tests for Age


*/


