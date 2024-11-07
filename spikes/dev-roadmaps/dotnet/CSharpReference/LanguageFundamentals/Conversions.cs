using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LanguageFundamentals
{
    internal class Conversions
    {
        public static void Convert()
        {
            // Implicit conversions are allowed when the compiler can guarantee they will
            // always succeed and no information is lost in conversion:

            int x = 12345;       // int is a 32-bit integer
            long y = x;          // Implicit conversion to 64-bit integer

            // In other cases, you need explicit conversions:

            short z = (short)x;  // Explicit conversion to 16-bit integer

            Console.WriteLine($"x: {x}");
            Console.WriteLine($"y: {y}");
            Console.WriteLine($"z: {z}");
        }
    }
}
