using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;

namespace MHRTest
{


    public class PrefixFinder
    {
        public static IEnumerable<string> AllPrefixes(int prefixLength, IEnumerable<string> words)
        {
            var prefixes = new List<string>();

            foreach (var w in words)
            {
                if (w.Length >= prefixLength)
                {
                    string prefix = w.Substring(0, prefixLength);
                    prefixes.Add(prefix);
                }
            }

            return prefixes.Distinct();
        }

        //public static void Main(string[] args)
        //{
        //    List<string> words = new List<string> { "apple", "ape", "apricot", "banana", "band" };
        //    int prefixLength = 2;

        //    List<string> result = AllPrefixes(words, prefixLength);

        //    Console.WriteLine("Distinct prefixes of length " + prefixLength + ":");
        //    foreach (var prefix in result)
        //    {
        //        Console.WriteLine(prefix);
        //    }
        //}
    }

}
