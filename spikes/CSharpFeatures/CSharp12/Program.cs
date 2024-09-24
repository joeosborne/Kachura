// See https://aka.ms/new-console-template for more information
using System.Diagnostics;
using System.Xml.Linq;

Console.WriteLine("Hello, World!");



//

//// Program.cs
//using System;

//namespace CSharp12Demo
//{
//    class Program
//    {
//        // Demonstrating Primary Constructors
//        public class Product(string name, decimal price) // Primary constructor
//        {
//            public string Name { get; set; } = name; // Name is initialized by the primary constructor
//        public decimal Price { get; set; } = price; // Price is also initialized

//        public void DisplayProduct() => Console.WriteLine($"Product: {Name}, Price: {Price:C}");
//    }

//    // Demonstrating default lambda parameters and collection expressions
//    static Func<int, int, int> multiply = (x = 2, y = 3) => x * y; // Default parameter values in lambdas

//    // Demonstrating collection expressions
//    static int[] numbers = [1, 2, 3, 4, 5]; // Collection expression for initializing arrays

//    static void Main(string[] args)
//    {
//        // Using primary constructor in class
//        var product = new Product("Laptop", 1499.99m);
//        product.DisplayProduct();

//        // Using default parameters in lambda expressions
//        Console.WriteLine($"Multiply default (2 * 3): {multiply()}");
//        Console.WriteLine($"Multiply custom (5 * 6): {multiply(5, 6)}");

//        // Using collection expressions for arrays
//        Console.WriteLine("Numbers: " + string.Join(", ", numbers));

//        // String interpolation improvements (alignments)
//        int amount = 42;
//        string formattedString = $"{amount,10}"; // Improved alignment in string interpolation
//        Console.WriteLine($"Formatted amount: {formattedString}");
//    }
//}
//}
