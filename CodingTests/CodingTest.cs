using System.Collections.Generic;
using System.Runtime.Intrinsics.X86;
using System;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.IO;
using System.Runtime.InteropServices;
using System.Buffers.Text;
using System.Globalization;
using System.Text.RegularExpressions;

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

            foreach (char c in input)
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

            foreach (char c in input)
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

        //The Maximum Subarray Problem is a classic problem that involves finding the contiguous subarray within
        //a one-dimensional numeric array that has the largest sum.
        //Problem Statement
        //Given an integer array nums, find the contiguous subarray (containing at least one number) that has the largest sum and return its sum.


        public static int FindMaxSubarraySum(int[] nums)
        {
            if (nums is null || nums.Length == 0)
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

        public static bool IsAPalindrome(string input)
        {
            var reversed = "";

            for (int i = input.Length - 1; i >= 0; i--)
            {
                reversed += input[i];
            }

            return reversed == input;
        }

//        The function GetFizzBuzz determines the output based on divisibility:
//If divisible by both 3 and 5 (i.e., 15), it returns "FizzBuzz".
//If divisible by 3, it returns "Fizz".
//If divisible by 5, it returns "Buzz".
//Otherwise, it returns the number as a string.
        public static string FizzBuzz(int input){
            if(input % 3 == 0 && input % 5 == 0)
            {
                return "FizzBuzz";
            }
            else if (input % 3 == 0)
            {
                return "Fizz";
            }
            else if (input % 5 == 0)
            {
                return "Buzz";
            }

            return input.ToString();
        }

        private static bool IsAValidRomanNumeral(string inputString)
        {
            Regex ValidRomanRegex = new Regex(
            @"^(?i:M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}))$",
            RegexOptions.Compiled);

            return ValidRomanRegex.IsMatch(inputString);
        }


        //        RomanNumeralConverter Implementation
        //Mapping Roman Numerals to Values: A dictionary maps each Roman numeral character to its integer value.
        //Iterate Over Characters: Loop through the Roman numeral string:
        //If the current numeral's value is greater than the previous value, subtract twice the previous value to correct
        //the earlier addition (for subtractive cases like IV, IX, etc.).
        //Otherwise, simply add the value.
        //Validation: An exception is thrown if an invalid character is encountered.
        public static int RomanToNumber(string numeralInput)
        {
            if(numeralInput is null || numeralInput == string.Empty || !IsAValidRomanNumeral(numeralInput))
            {
                throw new ArgumentException("Invalid Numeral Input");
            }



            
            Dictionary<string, int> numerals = new()
            {
                { "I", 1 },
                { "V", 5 },
                { "X", 10 },
                { "L", 50 },
                { "C", 100 },
                { "D", 500 },
                { "M", 1000 },
            };

            int currentValue = 0;
            int previousValue = 0;
            int result = 0;

            for (int i = 0; i < numeralInput.Length; i++)
            {
                if (!numerals.ContainsKey(numeralInput[i].ToString()))
                {
                    throw new ArgumentException("Invalid Numeral Input");
                }
                currentValue = numerals[numeralInput[i].ToString()];
                if (previousValue > 0 && currentValue > previousValue)
                {
                    result += currentValue - (previousValue * 2);
                }
                else
                {
                    result += currentValue;
                }
                previousValue = currentValue;
            }

            return result;
        }



//        Explanation
//NumberToRoman Implementation
//Mapping Values to Numerals: A list of tuples(int Value, string Numeral) represents the Roman numeral mapping, sorted from largest to smallest value.
//Building the Roman Numeral:
//Iterate through the mapping, starting with the largest value.
//For each value, subtract it from the input number while appending the corresponding numeral to the result string.
//Validation: The function ensures the number is between 1 and 3999, throwing an exception for invalid input.


        public static string NumberToRoman(int number)
        {
            if(number <= 0 || number > 3999)
            {
                throw new ArgumentOutOfRangeException("yada");
            }
            var numeralMap = new List<(int, string)>
            {
                (1000, "M"),
                (900, "CM"),
                (500, "D"),
                (400, "CD"),
                (100, "C"),
                (90, "XC"),
                (50, "L"),
                (40, "XL"),
                (10, "X"),
                (9, "IX"),
                (5, "V"),
                (4, "IV"),
                (1, "I")
            };

            string result = "";
            foreach (var mapItem in numeralMap)
            {
                while (number >= mapItem.Item1)
                {
                    result += mapItem.Item2;
                    number -= mapItem.Item1;

                }
                //if (mapItem.Item1 > number)
                //{
                //}

            }

            return result;
        }

        //The solution uses the "expand around center" approach:

        //Treat every character and every gap between characters as a potential center of a palindrome.
        //Expand outward while characters match.
        //Keep track of the maximum length palindrome found.
        public static string FindLongestPalindrome(string inputString)
        {
            if (string.IsNullOrEmpty(inputString)) return "";

            int start = 0, maxLength = 0;

            for (int i = 0; i < inputString.Length; i++)
            {
                // Odd-length palindrome (center is one character)
                ExpandAroundCenter(inputString, i, i, ref start, ref maxLength);

                // Even-length palindrome (center is between two characters)
                ExpandAroundCenter(inputString, i, i + 1, ref start, ref maxLength);
            }

            return inputString.Substring(start, maxLength);

        }

        private static void ExpandAroundCenter(string inputString, int left, int right, ref int start, ref int maxLength)
        {
            while (left >= 0 && right < inputString.Length && inputString[left] == inputString[right])
            {
                left--;
                right++;
            }

            // Adjust to the last valid palindrome indexes
            int length = right - left - 1;
            if (length > maxLength)
            {
                // found a larger palindrome so up[date maxLength and move start along 1
                maxLength = length;
                start = left + 1;
            }
        }



        /*
         * todo: add must dosand inlcude link to 50 UD course
         * 
         * Roman numerals - both ways
         * fizzbuzz
         * IsPalindrome
         * any completed tests
         * 
         */
    }
}
