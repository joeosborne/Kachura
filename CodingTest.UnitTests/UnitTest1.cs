namespace CodingTest.UnitTests
{
    // todo: split test classes..
    [TestClass]
    public class FindPairWithDictionaryTests    {

            
        [TestMethod]
        public void TestMethod1()
        {
            int[] nums = { 1, 4, 5, 7, 8, 9 };
            int k = 10;

            var result = CodingTests.CodingTest.FindPairWithDictionary(nums, k);

            Assert.AreEqual((1, 9), result);

        }

        [TestMethod]
        public void TestMethod2()
        {
            int[] nums = { 2, 7, 11, 15 };
            int k = 9;

            var result = CodingTests.CodingTest.FindPairWithDictionary(nums, k);

            Assert.AreEqual((2, 7), result);

        }

        [TestMethod]
        public void TestMethod3()
        {
            int[] nums = { 2, 7, 11, 15 };
            int k = 12;

            var result = CodingTests.CodingTest.FindPairWithDictionary(nums, k);

            Assert.IsNull(result);

        }
    }

    [TestClass]
    public class FindFirstRepeatingCharacterTests
    {


        [TestMethod]
        public void TestMethod1()
        {
            string input = "abcddef";
            char expected = 'd';
            

            var result = CodingTests.CodingTest.FindFirstRepeatingCharacter(input);

            Assert.AreEqual(expected, result);

        }

        [TestMethod]
        public void TestMethod2()
        {
            string input = "abcxxxxxdefx";
            char expected = 'x';


            var result = CodingTests.CodingTest.FindFirstRepeatingCharacter(input);

            Assert.AreEqual(expected, result);

        }

        [TestMethod]
        public void TestMethod3()
        {
            string input = "fwkj£hrtze£jkl";
            char expected = '£';


            var result = CodingTests.CodingTest.FindFirstRepeatingCharacter(input);

            Assert.AreEqual(expected, result);

        }

        [TestMethod]
        public void TestMethod4None()
        {
            string input = "abc^dexyz";


            var result = CodingTests.CodingTest.FindFirstRepeatingCharacter(input);

            Assert.IsNull(result);

        }

    }


    [TestClass]
    public class RemoveDuplicatesTests
    {


        [TestMethod]
        public void TestMethod1()
        {
                string input = "abcddef";
            string expected = "abcdef";


            var result = CodingTests.CodingTest.RemoveDuplicates(input);

            Assert.AreEqual(expected, result);
        }

        [TestMethod]
        public void TestMethod2()
        {
            string input = "abcd£poyddle";
            string expected = "abcd£poyle";


            var result = CodingTests.CodingTest.RemoveDuplicates(input);

            Assert.AreEqual(expected, result);
        }

        [TestMethod]
        public void TestMethod3()
        {
            string input = "qpwoeirutyalskdjfhqpalmcnxb";
            string expected = "qpwoeirutyalskdjfhmcnxb";


            var result = CodingTests.CodingTest.RemoveDuplicates(input);

            Assert.AreEqual(expected, result);
        }
    }


    [TestClass]
    public class FindTheDuplicate
    {
        [TestMethod]
        public void TestMethod1()
        {
            string input = "";
            string expected = "";


            var result = "x";// CodingTests.CodingTest.(input);

            Assert.AreEqual(expected, result);
        }

    }
    [TestClass]
    public class TreeDeothFirstSearch
    {
        [TestMethod]
        public void TestMethod1()
        {
            string input = "";
            string expected = "";


            var result = "x";// CodingTests.CodingTest.(input);

            Assert.AreEqual(expected, result);
        }

    }
    [TestClass]
    public class MaximumSubarray
    {
        [TestMethod]
        public void TestMethod1()
        {
            string input = "";
            string expected = "";


            var result = "x";// CodingTests.CodingTest.(input);

            Assert.AreEqual(expected, result);
        }

    }
    [TestClass]
    public class ReverseBinaryTree
    {
        [TestMethod]
        public void TestMethod1()
        {
            string input = "";
            string expected = "";


            var result = "x";// CodingTests.CodingTest.(input);

            Assert.AreEqual(expected, result);
        }

    }
    [TestClass]
    public class LongestSubstringWithoutRepeatingCharacters
    {
        [TestMethod]
        public void TestMethod1()
        {
            string input = "";
            string expected = "";


            var result = "x";// CodingTests.CodingTest.(input);

            Assert.AreEqual(expected, result);
        }

    }
    [TestClass]
    public class ReverseLinkedList
    {
        [TestMethod]
        public void TestMethod1()
        {
            string input = "";
            string expected = "";


            var result = "x";// CodingTests.CodingTest.(input);

            Assert.AreEqual(expected, result);
        }

    }
    [TestClass]
    public class PeakFinding
    {
        [TestMethod]
        public void TestMethod1()
        {
            string input = "";
            string expected = "";


            var result = "x";// CodingTests.CodingTest.(input);

            Assert.AreEqual(expected, result);
        }

    }
    [TestClass]
    public class PalindromeLinkedList
    {
        [TestMethod]
        public void TestMethod1()
        {
            string input = "";
            string expected = "";


            var result = "x";// CodingTests.CodingTest.(input);

            Assert.AreEqual(expected, result);
        }

    }

    [TestClass]
    public class GetSubstringIndex
    {
        [TestMethod]
        public void TestMethod1()
        {
            string input = "";
            string expected = "";


            var result = "x";// CodingTests.CodingTest.(input);

            Assert.AreEqual(expected, result);
        }

    }
    [TestClass]
    public class TreeBreadthFirstSearch
    {
        [TestMethod]
        public void TestMethod1()
        {
            string input = "";
            string expected = "";


            var result = "x";// CodingTests.CodingTest.(input);

            Assert.AreEqual(expected, result);
        }

    }
    [TestClass]
    public class SortLinkedList
    {
        [TestMethod]
        public void TestMethod1()
        {
            string input = "";
            string expected = "";


            var result = "x";// CodingTests.CodingTest.(input);

            Assert.AreEqual(expected, result);
        }

    }
    [TestClass]
    public class ValidBinarySearchTree
    {
        [TestMethod]
        public void TestMethod1()
        {
            string input = "";
            string expected = "";


            var result = "x";// CodingTests.CodingTest.(input);

            Assert.AreEqual(expected, result);
        }

    }
    [TestClass]
    public class MinimumCostPathInMatrix
    {
        [TestMethod]
        public void TestMethod1()
        {
            string input = "";
            string expected = "";


            var result = "x";// CodingTests.CodingTest.(input);

            Assert.AreEqual(expected, result);
        }

    }
    [TestClass]
    public class BalancedBinaryTree
    {
        [TestMethod]
        public void TestMethod1()
        {
            string input = "";
            string expected = "";


            var result = "x";// CodingTests.CodingTest.(input);

            Assert.AreEqual(expected, result);
        }

    }
    [TestClass]
    public class PathsInMatrix
    {
        [TestMethod]
        public void TestMethod1()
        {
            string input = "";
            string expected = "";


            var result = "x";// CodingTests.CodingTest.(input);

            Assert.AreEqual(expected, result);
        }

    }
}