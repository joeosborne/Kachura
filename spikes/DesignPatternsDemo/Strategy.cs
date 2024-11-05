//Strategy Pattern
//Strategy defines a family of algorithms and makes them interchangeable. The strategy allows the algorithm to be selected at runtime.
// Patterns/Strategy.cs
namespace DesignPatternsDemoApp.Patterns
{
    public interface IStrategy
    {
        void Execute();
    }

    public class ConcreteStrategyA : IStrategy
    {
        public void Execute()
        {
            Console.WriteLine("Strategy A executed");
        }
    }

    public class ConcreteStrategyB : IStrategy
    {
        public void Execute()
        {
            Console.WriteLine("Strategy B executed");
        }
    }

    public class Context
    {
        private readonly IStrategy _strategy;

        public Context(IStrategy strategy)
        {
            _strategy = strategy;
        }

        public void PerformAction()
        {
            _strategy.Execute();
        }
    }
}
