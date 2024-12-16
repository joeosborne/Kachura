using System.Text.Json;
using System.Text.Json.Schema;

var options = JsonSerializerOptions.Default;
var text = options.GetJsonSchemaAsNode(typeof(Person));
Console.WriteLine(text);

Console.WriteLine(Guid.CreateVersion7());
Console.WriteLine(Guid.CreateVersion7());
Console.WriteLine(Guid.CreateVersion7());

class Person
{
    public string FullName { get; set; }

    public DateOnly DateOfBirth { get; set; }
}
