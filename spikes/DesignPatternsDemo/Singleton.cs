// Singleton ensures that a class has only one instance and provides a global point of access to it.

// Patterns/Singleton.cs
namespace DesignPatternsDemoApp.Patterns
{
    public class Singleton
    {
        private static Singleton _instance;
        private static readonly object _lock = new object();

        private Singleton() { }

        public static Singleton Instance
        {
            get
            {
                lock (_lock)
                {
                    if (_instance == null)
                    {
                        _instance = new Singleton();
                    }
                    return _instance;
                }
            }
        }

        public void ShowMessage()
        {
            Console.WriteLine("Singleton Instance Accessed");
        }
    }
}
