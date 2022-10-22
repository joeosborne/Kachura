using System;
using System.Net.Http;
using System.Text;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine($"Press any key to send a message");
            Console.ReadLine();

            HttpClient client = new HttpClient();
            string url = "http://localhost:7071/api/messages";
            
            HttpContent content = new StringContent("{'Value': 'Hello'}", Encoding.UTF8, "application/json");

            HttpResponseMessage response = client.PostAsync(url, content).Result;
            string results = response.Content.ReadAsStringAsync().Result;

            Console.WriteLine($"results: {results}");
            Console.ReadLine();
        }
    }
}
