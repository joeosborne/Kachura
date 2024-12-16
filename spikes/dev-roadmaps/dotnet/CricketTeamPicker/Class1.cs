using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CricketTeamPicker
{
    // todo: replace IMessageService with the contract for the cricket picker
    // todo: Add mocking (NSubstitute) to existing xunit tests.
    // todo: Update and re-test from both host (concrete) and unit tests (mocked)

    // Service Interface
    public interface IMessageService
    {
        void SendMessage(string message);
    }



    // Service Implementation
    public class ConsoleMessageService : IMessageService
    {
        public void SendMessage(string message)
        {
            Console.WriteLine($"CricketTeamPicker|Message: {message}");
        }
    }
}
