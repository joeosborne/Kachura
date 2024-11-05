//Facade Pattern
//Facade provides a simplified interface to a complex subsystem.
// Patterns/Facade.cs
namespace DesignPatternsDemoApp.Patterns
{
    public class SubsystemA
    {
        public void OperationA()
        {
            Console.WriteLine("Subsystem A Operation");
        }
    }

    public class SubsystemB
    {
        public void OperationB()
        {
            Console.WriteLine("Subsystem B Operation");
        }
    }

    public class SubsystemC
    {
        public void OperationC()
        {
            Console.WriteLine("Subsystem C Operation");
        }
    }

    public class Facade
    {
        private readonly SubsystemA _subsystemA = new SubsystemA();
        private readonly SubsystemB _subsystemB = new SubsystemB();
        private readonly SubsystemC _subsystemC = new SubsystemC();

        public void SimplifiedOperation()
        {
            _subsystemA.OperationA();
            _subsystemB.OperationB();
            _subsystemC.OperationC();
        }
    }
}
