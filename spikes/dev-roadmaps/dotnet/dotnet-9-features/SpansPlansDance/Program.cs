var result = PrintSum(1, 2, 3, 4, 5);

Console.WriteLine();

int PrintSum(params ReadOnlySpan<int> numbers)
{
    var sum = 0;
    for (int i = 0; i < numbers.Length; i++)
    {
        sum += numbers[i];
    }

    return sum;
}

/*
var dic = new Dictionary<string, int>
{
    { "Hello", 69 },
    { " World!", 420 }
};

ReadOnlySpan<char> helloWorld = "Hello, World!";

var splitRange = helloWorld.Split(',');

var altDic = dic.GetAlternateLookup<ReadOnlySpan<char>>();

foreach (var range in splitRange)
{
    ReadOnlySpan<char> key = helloWorld[range];
    Console.WriteLine(altDic[key]);
}

var hashSet = new HashSet<string>();

var readOnlySet = new ReadOnlySet<string>(hashSet);
*/
