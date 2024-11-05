//Repository Pattern
//Repository provides an abstraction layer between the business logic and data access layer.
// Patterns/Repository.cs
namespace DesignPatternsDemoApp.Patterns
{
    public class Customer
    {
        public string Name { get; set; }
    }

    public interface IRepository<T>
    {
        void Add(T entity);
        T Get(int id);
    }

    public class CustomerRepository : IRepository<Customer>
    {
        private readonly List<Customer> _customers = new List<Customer>();

        public void Add(Customer entity)
        {
            _customers.Add(entity);
        }

        public Customer Get(int id)
        {
            return _customers.FirstOrDefault(c => c.Name == "John Doe"); // Example lookup
        }
    }
}
