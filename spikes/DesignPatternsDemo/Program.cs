// Program.cs
using DesignPatternsDemoApp.Patterns;

class Program
{
    static void Main(string[] args)
    {
        // Singleton
        Console.WriteLine("Singleton Pattern:");
        Singleton.Instance.ShowMessage();

        // Factory
        Console.WriteLine("\nFactory Pattern:");
        var productA = ProductFactory.CreateProduct("A");
        productA.DoSomething();
        var productB = ProductFactory.CreateProduct("B");
        productB.DoSomething();

        // Observer
        Console.WriteLine("\nObserver Pattern:");
        var subject = new Subject();
        var observer1 = new ConcreteObserver("Observer 1");
        var observer2 = new ConcreteObserver("Observer 2");
        subject.Attach(observer1);
        subject.Attach(observer2);
        subject.Notify("New Event!");

        // Strategy
        Console.WriteLine("\nStrategy Pattern:");
        var contextA = new Context(new ConcreteStrategyA());
        contextA.PerformAction();
        var contextB = new Context(new ConcreteStrategyB());
        contextB.PerformAction();

        // Decorator
        Console.WriteLine("\nDecorator Pattern:");
        IComponent component = new ConcreteComponent();
        component.Operation();
        IComponent decoratedComponent = new ConcreteDecorator(component);
        decoratedComponent.Operation();

        // Facade
        Console.WriteLine("\nFacade Pattern:");
        var facade = new Facade();
        facade.SimplifiedOperation();

        // Repository
        Console.WriteLine("\nRepository Pattern:");
        var customerRepo = new CustomerRepository();
        var customer = new Customer { Name = "John Doe" };
        customerRepo.Add(customer);
        var retrievedCustomer = customerRepo.Get(1);
        Console.WriteLine($"Retrieved Customer: {retrievedCustomer?.Name}");
    }
}
