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
        public static string TreeDepthFirstSearch(string input)
        {
            // todo: change method signature and implement
            throw new NotImplementedException();

        }



        //The Maximum Subarray Problem is a classic problem that involves finding the contiguous subarray within
        //a one-dimensional numeric array that has the largest sum.
        //Problem Statement
        //Given an integer array nums, find the contiguous subarray (containing at least one number) that has the largest sum and return its sum.


        public static int FindMaxSubarraySum(int[] nums)
        {
            if(nums is null || nums.Length == 0)
            {
                throw new ArgumentException("nums is empty");
            }

            // int[] nums = { -2, 1, -3, 4, -1, 2, 1, -5, 4 };
            int currentMax = nums[0];
            int maxSoFar = nums[0];

            for (int i = 1; i < nums.Length; i++)
            {
                currentMax = Math.Max(nums[i], currentMax + nums[i]);
                maxSoFar = Math.Max(maxSoFar, currentMax);

            }

            return maxSoFar;





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


        

        public static bool IsAPalindrome(string input)
        {
            var reversed = "";

            for (int i = input.Length-1; i >= 0; i--)
            {
                reversed += input[i];
            }

            return reversed == input;
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
         * 
         * IsPalindrome
         * LongestPossiblePalindrome
         * 
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
