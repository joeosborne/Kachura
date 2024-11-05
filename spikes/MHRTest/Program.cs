using MHRTest;

internal class Program
{
    private static void Main(string[] args)
    {
        //Console.WriteLine("Hello, World!");
        //List<string> words = new List<string> { "apple", "ape", "apricot", "banana", "band" };
        //int prefixLength = 2;

        //List<string> result = PrefixFinder.AllPrefixes(words, prefixLength);

        //Console.WriteLine("Distinct prefixes of length " + prefixLength + ":");
        //foreach (var prefix in result)
        //{
        //    Console.WriteLine(prefix);
        //}
        // Should print "flo", "fle", and "fla" since those are the distinct, length 3 prefixes.
        foreach (var p in PrefixFinder.AllPrefixes(3, new string[] { "flow", "flowers", "flew", "flag", "fm" }))
            Console.WriteLine(p);
    }
}