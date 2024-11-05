//2.Factory Pattern
//Factory defines an interface for creating an object, but it’s the subclasses that decide which class to instantiate.
// Patterns/Factory.cs
namespace DesignPatternsDemoApp.Patterns
{
    public interface IProduct
    {
        void DoSomething();
    }

    public class ConcreteProductA : IProduct
    {
        public void DoSomething()
        {
            Console.WriteLine("Product A Action");
        }
    }

    public class ConcreteProductB : IProduct
    {
        public void DoSomething()
        {
            Console.WriteLine("Product B Action");
        }
    }

    public class ProductFactory
    {
        public static IProduct CreateProduct(string type)
        {
            if (type == "A")
                return new ConcreteProductA();
            else if (type == "B")
                return new ConcreteProductB();
            else
                throw new ArgumentException("Invalid type");
        }
    }
}
