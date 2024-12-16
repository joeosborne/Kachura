using Microsoft.Extensions.DependencyInjection;
using System;
using CricketTeamPicker;

namespace ConsoleAppWithDI
{
    //// Service Interface
    //public interface IMessageService
    //{
    //    void SendMessage(string message);
    //}

    //// Service Implementation
    //public class ConsoleMessageService : IMessageService
    //{
    //    public void SendMessage(string message)
    //    {
    //        Console.WriteLine($"Message: {message}");
    //    }
    //}

    // Application Entry Point
    public class App
    {
        private readonly IMessageService _messageService;
        private readonly ICricketerDataService _cricketerDataService;

        // Dependency injected via constructor
        public App(IMessageService messageService, ICricketerDataService cricketerDataService)
        {
            _messageService = messageService;
            _cricketerDataService = cricketerDataService;
        }

        public void Run()
        {
            _messageService.SendMessage("Hello, Dependency Injection in .NET!");
            var picker = new TeamPicker(_cricketerDataService);
            var squad = picker.GetAvailablePlayers();

            foreach (var p in squad)
            {
                Console.WriteLine("---");
                Console.WriteLine(p.ToString());
            }
            //_teamPicker.
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Set up the Dependency Injection container
            var serviceProvider = new ServiceCollection()
                .AddSingleton<IMessageService, ConsoleMessageService>() // Register the service
                .AddSingleton<ICricketerDataService, CricketerDataService>() // Register the service
                .AddSingleton<App>() // Register the application
                .BuildServiceProvider();

            // Resolve and run the application
            var app = serviceProvider.GetRequiredService<App>();
            app.Run();
        }
    }
}
