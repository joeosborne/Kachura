using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Buffers.Text;
using System.Linq.Expressions;
using System.Reflection;
using System.Runtime.Intrinsics.X86;

namespace CSharpLanguage
{
    //Record types in C# 9 and C# 10 are a new reference type that provides built-in functionality for immutable data models and value-based equality. Records
    //are designed to store data rather than represent behaviors, making them ideal for situations where you need concise, immutable, and easy-to-use types
    //primarily intended for data holding and comparisons.

    //Key Features of Record Types
    //Immutable by Default: Records provide a concise way to define immutable data models.Once an instance of a record is created, its properties cannot be
    //modified (unless explicitly designed to be mutable).

    //Value-based Equality: Unlike classes, which use reference-based equality by default (meaning two objects are only equal if they refer to the same instance),
    //records use value-based equality.This means that two record instances are considered equal if all their properties are the same, regardless of whether
    //they are the same instance.

    //Concise Syntax: C# 9 introduced a positional syntax for records that makes declaring records very concise, especially for models with multiple properties.

    //Built-in ToString(), Equals(), and GetHashCode(): Records automatically generate a ToString() method that provides a readable representation of the
    //record's data, as well as overridden Equals() and GetHashCode() methods based on the record's values.

    //Deconstruction Support: Records support deconstruction, allowing you to break them into their individual components easily.

    //With-expressions: Records support with-expressions, which provide a simple way to create a copy of an existing record with specific modifications to
    //some properties.


    public record Person(string FirstName, string LastName);


    public record Employee(string FirstName, string LastName, string EmployeeId) : Person(FirstName, LastName);


    // C# 10 added some enhancements to records:
    // 1 Record Structs: In C# 10, you can now define record structs, which provide value-based equality like record classes but are value types (stack-allocated).
    public record struct Point(int X, int Y);

    // 2 With-expressions for Structs: C# 10 also added support for with-expressions on structs, which allows copying structs in the same way as records.

    public class RecordExample
    {
        public void Example()
        {
            var person1 = new Person("John", "Doe");
            var person2 = new Person("John", "Doe");

            Console.WriteLine(person1 == person2); // True (value-based equality)

            // Records provide a nice string representation by default
            Console.WriteLine(person1); // Output: Person { FirstName = John, LastName = Doe }

            // Deconstruction
            var (firstName, lastName) = person1;
            Console.WriteLine($"First Name: {firstName}, Last Name: {lastName}"); // Output: First Name: John, Last Name: Doe
        }


        //With-expressions
        //Records are immutable, but you can create a new instance with modified properties using a with-expression.
        public void WithExpressions()
        {
            var person1 = new Person("John", "Doe");
            var person2 = person1 with { LastName = "Smith" };

            Console.WriteLine(person2); // Output: Person { FirstName = John, LastName = Smith }

        }

        //Inheritance in Record Types
        //Records support inheritance, allowing you to create derived records.However, records automatically implement value-based equality by default, so derived records will compare their base and derived properties based on their values.
        public void Inheritance()
        {
            var employee = new Employee("John", "Doe", "E123");
            Console.WriteLine(employee); // Output: Employee { FirstName = John, LastName = Doe, EmployeeId = E123 }

        }
    }

}
