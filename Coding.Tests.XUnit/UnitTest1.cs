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

    public class FizzBuzzTests
    {
        [Theory]
        [InlineData(1, "1")]
        [InlineData(2, "2")]
        [InlineData(3, "Fizz")]
        [InlineData(5, "Buzz")]
        [InlineData(6, "Fizz")]
        [InlineData(10, "Buzz")]
        [InlineData(15, "FizzBuzz")]
        [InlineData(30, "FizzBuzz")]
        [InlineData(30, "FizzBuzz")]
        [InlineData(-998, "-998")]
        public void GetFizzBuzz_ShouldReturnExpectedResult(int input, string expected)
        {
            // Act
            var result = CodingTests.CodingTest.FizzBuzz(input);

            // Assert
            Assert.Equal(expected, result);
        }
    }

    public class RomanNumeralTests
    {
        [Theory]
        [InlineData("I", 1)]
        [InlineData("V", 5)]
        [InlineData("X", 10)]
        [InlineData("L", 50)]
        [InlineData("C", 100)]
        [InlineData("D", 500)]
        [InlineData("M", 1000)]
        [InlineData("IV", 4)]
        [InlineData("IX", 9)]
        [InlineData("XL", 40)]
        [InlineData("XC", 90)]
        [InlineData("CD", 400)]
        [InlineData("CM", 900)]
        [InlineData("MMMCMXCIX", 3999)]
        [InlineData("MCMLXXXIV", 1984)]
        public void RomanToNumber_ShouldReturnExpectedResult(string roman, int expected)
        {
            // Act
            var result = CodingTests.CodingTest.RomanToNumber(roman);

            // Assert
            Assert.Equal(expected, result);
        }

        [Theory]
        [InlineData("A")]
        [InlineData("IIII")]
        [InlineData("VV")]
        [InlineData("")]
        public void RomanToNumber_ShouldThrowException_ForInvalidRomanNumerals(string roman)
        {
            // Act & Assert
            Assert.Throws<ArgumentException>(() => CodingTests.CodingTest.RomanToNumber(roman));
        }

        [Theory]
        [InlineData(1, "I")]
        [InlineData(3, "III")]
        [InlineData(4, "IV")]
        [InlineData(9, "IX")]
        [InlineData(10, "X")]
        [InlineData(40, "XL")]
        [InlineData(90, "XC")]
        [InlineData(400, "CD")]
        [InlineData(900, "CM")]
        [InlineData(1000, "M")]
        [InlineData(1984, "MCMLXXXIV")]
        [InlineData(3999, "MMMCMXCIX")]
        public void NumberToRoman_ShouldReturnExpectedResult(int number, string expected)
        {
            // Act
            var result = CodingTests.CodingTest.NumberToRoman(number);

            // Assert
            Assert.Equal(expected, result);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(-1)]
        [InlineData(4000)]
        public void NumberToRoman_ShouldThrowException_ForOutOfRangeNumbers(int number)
        {
            // Act & Assert
            Assert.Throws<ArgumentOutOfRangeException>(() => CodingTests.CodingTest.NumberToRoman(number));
        }
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

    //    using Xunit;

    //public class FizzBuzzTests
    //    {

    //    }




    //using Xunit;

    //public class RomanNumeralConverterTests
    


    //    using System;
    //using System.Collections.Generic;

    //public class RomanNumeralConverter
    //    {
    //        private static readonly List<(int Value, string Numeral)> RomanMap = new()
    //    {
    //        (1000, "M"),
    //        (900, "CM"),
    //        (500, "D"),
    //        (400, "CD"),
    //        (100, "C"),
    //        (90, "XC"),
    //        (50, "L"),
    //        (40, "XL"),
    //        (10, "X"),
    //        (9, "IX"),
    //        (5, "V"),
    //        (4, "IV"),
    //        (1, "I")
    //    };

    //        public static string NumberToRoman(int number)
    //        {
    //            if (number <= 0 || number > 3999)
    //            {
    //                throw new ArgumentOutOfRangeException(nameof(number), "Number must be between 1 and 3999.");
    //            }

    //            var result = string.Empty;

    //            foreach (var (value, numeral) in RomanMap)
    //            {
    //                while (number >= value)
    //                {
    //                    result += numeral;
    //                    number -= value;
    //                }
    //            }

    //            return result;
    //        }
    //    }


    //    using System;
    //using System.Collections.Generic;

    //public class RomanNumeralConverter
    //    {
    //        private static readonly Dictionary<char, int> RomanValues = new()
    //    {
    //        { 'I', 1 },
    //        { 'V', 5 },
    //        { 'X', 10 },
    //        { 'L', 50 },
    //        { 'C', 100 },
    //        { 'D', 500 },
    //        { 'M', 1000 }
    //    };

    //        public static int RomanToNumber(string roman)
    //        {
    //            int result = 0;
    //            int previousValue = 0;

    //            foreach (char numeral in roman)
    //            {
    //                if (!RomanValues.TryGetValue(numeral, out int currentValue))
    //                {
    //                    throw new ArgumentException($"Invalid Roman numeral: {numeral}");
    //                }

    //                // If the current value is greater than the previous, subtract twice the previous (correct for earlier addition)
    //                if (currentValue > previousValue)
    //                {
    //                    result += currentValue - 2 * previousValue;
    //                }
    //                else
    //                {
    //                    result += currentValue;
    //                }

    //                previousValue = currentValue;
    //            }

    //            return result;
    //        }
    //    }








