using System.Collections.Generic;
using System.Runtime.Intrinsics.X86;
using System;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace CodingTests
{
    public static class CodingTest
    {

        // Problem Statement
        // Given an array of integers nums and an integer K, return the pair of numbers that add up to K.

        // NOTE: Assumption for this test is that there is only one pair that adds up to the target number.
        // TODO: Add a test case for multiple pairs that add up to the target number.
        public static (int, int)? FindPairWithDictionary(int[] nums, int k)
        {
            Dictionary<int, int> complementMap = new();

            for (int i = 0; i < nums.Length; i++)
            {
                var complement = k - nums[i];

                if (complementMap.ContainsKey(complement))
                {
                    return (complementMap[complement], nums[i]);

                }
                complementMap[nums[i]] = nums[i];

            }



            return null; // No pair found
        }

        public static char? FindFirstRepeatingCharacter(string input)
        {
            char? result = null;
            HashSet<char> seen = new();

            foreach(char c in input)
            {
                if (seen.Contains(c))
                {
                    return c;
                }
                seen.Add(c);
            }

            return result;
        }


        // todo: add to/refactor this and the tests for...
        //Small Collections: HashSet or Distinct() (simple and efficient).
        //Maintain Order: Use ToDictionary() or LINQ with Distinct().
        //Custom Logic: Use a manual loop with a secondary collection.
        // .. maybe separate methods with a list of strings and/or numbers
        public static string RemoveDuplicates(string input)
        {
            HashSet<string> dedupe = new();
            string result = "";
            
            foreach(char c in input)
            {
                dedupe.Add(c.ToString());
            }

            foreach (string c in dedupe)
            {
                result += c;
            }

            return result;

        }


        public static string FindTheDuplicate(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }
        public static string TreeDeothFirstSearch(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }
        public static string MaximumSubarray(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }
        public static string ReverseBinaryTree(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }
        public static string LongestSubstringWithoutRepeatingCharacters(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }
        public static string ReverseLinkedList(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }
        public static string PeakFinding(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }
        public static string PalindromeLinkedList(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }
        public static string LongestPossiblePalindrome(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }
        public static string GetSubstringIndex(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }
        public static string TreeBreadthFirstSearch(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }
        public static string SortLinkedList(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }
        public static string ValidBinarySearchTree(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }
        public static string MinimumCostPathInMatrix(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }
        public static string BalancedBinaryTree(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }
        public static string PathsInMatrix(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }


        /*
         * FindTheDuplicate
         * TreeDeothFirstSearch
         * MaximumSubarray
         * ReverseBinaryTree
         * LongestSubstringWithoutRepeatingCharacters
         * ReverseLinkedList
         * PeakFinding
         * PalindromeLinkedList
         * LongestPossiblePalindrome
         * GetSubstringIndex
         * TreeBreadthFirstSearch
         * SortLinkedList
         * ValidBinarySearchTree
         * MinimumCostPathInMatrix
         * BalancedBinaryTree
         * PathsInMatrix
         * 
         * 
         * Roman numerals - both ways
         * fizzbuzz
         * IsPalindrome
         * 
         */
    }
}
