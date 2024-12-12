namespace Coding.Tests.XUnit
{
    using Microsoft.VisualStudio.TestPlatform.TestHost;
    using System;
    using System.Drawing;
    using System.Reflection.Emit;
    using Xunit;

    public class FindMaxSubarraySumTests
    {

        //The Maximum Subarray Problem is a classic problem that involves finding the contiguous subarray within
        //a one-dimensional numeric array that has the largest sum.
        //Problem Statement
        //Given an integer array nums, find the contiguous subarray (containing at least one number) that has the largest sum and return its sum.

        [Fact]
        public void FindMaxSubarraySum_ShouldReturnCorrectResult_ForMixedNumbers()
        {
            int[] nums = { -2, 1, -3, 4, -1, 2, 1, -5, 4 };
            //int result = CodingTests.CodingTest.FindMaxSubarraySum(nums);
            var result = CodingTests.CodingTest.FindMaxSubarraySum(nums);
            Assert.Equal(6, result); // Expected max subarray sum is 6
        }

        [Fact]
        public void FindMaxSubarraySum_ShouldReturnCorrectResult_ForAllNegativeNumbers()
        {
            int[] nums = { -3, -2, -5, -1, -4 };
            int result = CodingTests.CodingTest.FindMaxSubarraySum(nums);
            Assert.Equal(-1, result); // The largest single element is -1
        }

        [Fact]
        public void FindMaxSubarraySum_ShouldReturnCorrectResult_ForAllPositiveNumbers()
        {
            int[] nums = { 1, 2, 3, 4, 5 };
            int result = CodingTests.CodingTest.FindMaxSubarraySum(nums);
            Assert.Equal(15, result); // The entire array is the subarray
        }

        [Fact]
        public void FindMaxSubarraySum_ShouldReturnCorrectResult_ForSingleElementArray()
        {
            int[] nums = { 42 };
            int result = CodingTests.CodingTest.FindMaxSubarraySum(nums);
            Assert.Equal(42, result); // Only one element, so it's the maximum sum
        }

        [Fact]
        public void FindMaxSubarraySum_ShouldThrowArgumentException_ForEmptyArray()
        {
            int[] nums = { };

            Assert.Throws<ArgumentException>(() => CodingTests.CodingTest.FindMaxSubarraySum(nums));
        }

        [Fact]
        public void FindMaxSubarraySum_ShouldThrowArgumentException_ForNullArray()
        {
            int[] nums = null;

            Assert.Throws<ArgumentException>(() => CodingTests.CodingTest.FindMaxSubarraySum(nums));
        }
    }


    public class IsAPalindromeTests
    {

        //The Maximum Subarray Problem is a classic problem that involves finding the contiguous subarray within
        //a one-dimensional numeric array that has the largest sum.
        //Problem Statement
        //Given an integer array nums, find the contiguous subarray (containing at least one number) that has the largest sum and return its sum.

        [Fact]
        public void todo()
        {
            string input = "dad";
            var result = CodingTests.CodingTest.IsAPalindrome(input);
            Assert.True(result);
        }


        [Fact]
        public void todo3()
        {
            string[] palindromes = ["civic", "radar", "level", "rotor", "kayak", "madam", "refer"];

            foreach (var p in palindromes)
            {
                var result = CodingTests.CodingTest.IsAPalindrome(p);
                Assert.True(result);

            }
        }

        [Fact]
        public void todo2()
        {
            string input = "yada";
            var result = CodingTests.CodingTest.IsAPalindrome(input);
            Assert.False(result);
        }

        [Fact]
        public void todo4()
        {
            string input = "levelz";
            var result = CodingTests.CodingTest.IsAPalindrome(input);
            Assert.False(result);
        }
    }

    public class LongestPossiblePalindromeTests
    {

        [Theory]
        //[InlineData("babad", "bab")] // or "aba"
        //[InlineData("cbbd", "bb")]
        //[InlineData("racecar", "racecar")]
        [InlineData("mumreferdad", "refer")]
        //[InlineData("forgeeksskeegfor", "geeksskeeg")]
        //[InlineData("", "")]
        public void TestLongestPalindrome(string input, string expected)
        {
            // Arrange
            var program = new Program();

            // Act
            string result = CodingTests.CodingTest.FindLongestPalindrome(input);

            // Assert
            Assert.Contains(expected, result); // Check if result is one of the valid options
        }

        [Fact]
        public void TestLongestPalindrome_WithNullInput()
        {
            // Arrange
            string input = null;

            // Act
            string result = CodingTests.CodingTest.FindLongestPalindrome(input);

            // Assert
            Assert.Equal("", result);
        }

        [Fact]
        public void TestLongestPalindrome_WithSpecialCharacters()
        {
            // Arrange
            string input = "A man, a plan, a canal, Panama";

            // Act
            string result = CodingTests.CodingTest.FindLongestPalindrome(input);

            // Assert
            Assert.True(result.Length > 0); // Ensure a palindrome substring is found
        }
    }

        //}
    }