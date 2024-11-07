using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Animals
{
    public class Panda
    {
        public string Name;             // Instance field
        public static int Population;   // Static field

        public Panda(string n)         // Constructor
        {
            Name = n;                      // Assign the instance field
            Population = Population + 1;   // Increment the static Population field
        }
    }
}
