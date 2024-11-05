//Decorator Pattern
//Decorator adds functionality to an object dynamically without altering its structure.
// Patterns/Decorator.cs
namespace DesignPatternsDemoApp.Patterns
{
    public interface IComponent
    {
        void Operation();
    }

    public class ConcreteComponent : IComponent
    {
        public void Operation()
        {
            Console.WriteLine("Concrete Component Operation");
        }
    }

    public class Decorator : IComponent
    {
        private readonly IComponent _component;

        public Decorator(IComponent component)
        {
            _component = component;
        }

        public virtual void Operation()
        {
            _component.Operation();
        }
    }

    public class ConcreteDecorator : Decorator
    {
        public ConcreteDecorator(IComponent component) : base(component) { }

        public override void Operation()
        {
            base.Operation();
            Console.WriteLine("Concrete Decorator Operation");
        }
    }
}
