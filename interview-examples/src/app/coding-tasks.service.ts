import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodingTasksService {

  constructor() { }

  // numberToRoman(input: number){
  //   console.log('initial input: ' + input)
  //   if (input < 0) {
  //     throw new Error('input must be higher than zero ');
  //   }
  //   if (input > 3999) {
  //     throw new Error('input cannot be higher than 3999');
  //   }
  //
  //   let result =''
  //   const romanMap: { [key: number]: string } = {
  //     1000: 'M',
  //     900: 'CM',
  //     500: 'D',
  //     400: 'CD',
  //     100: 'C',
  //     90: 'XC',
  //     50: 'L',
  //     40: 'XL',
  //     10: 'X',
  //     9: 'IX',
  //     5: 'V',
  //     4: 'IV',
  //     1: 'I',
  //   };
  //   console.log('romanMap')
  //   console.log(romanMap)
  //
  //   for (const value of Object.keys(romanMap).reverse().map(Number)){
  //     console.log('value..')
  //     console.log(value)
  //     while(value <= input){
  //       console.log('---')
  //       result += romanMap[value]
  //       input -= value;
  //       console.log('result...')
  //       console.log(result)
  //       console.log('input...')
  //       console.log(input)
  //     }
  //   }
  //   console.log('---')
  //   console.log('returning result...')
  //   console.log(result)
  //   return result;
  // }
  //
  //
  // romanToNumber(input: string):number{
  //
  //
  //
  //
  //
  //   console.log(input)
  //   // define a key/value set - keyed on roman


  //   const romanMap: { [key: string]: number } = {
  //     'M': 1000,
  //     'CM': 900,
  //     'D': 500,
  //     'CD': 400,
  //     'C': 100,
  //     'XC': 90,
  //     'L': 50,
  //     'XL': 40,
  //     'X': 10,
  //     'IX': 9,
  //     'V': 5,
  //     'IV': 4,
  //     'I': 1,
  //
  //   };
  //
  //   // loop through object keys
  //   // throw error if input doesnt match
  //   // debugger;
  //   // for (const key of Object.keys(romanMap)){
  //   //   if (input !== key){
  //   //     throw new Error('invalid input')
  //   //   }
  //   //}
  //
  //   let total = 0;
  //   let prevValue = 0;//todo?
  //
  //
  //   // loop through input
  //   // set current value
  //   // error if no cv
  //   //for (let i = 0; input.length > i; i++) {
  //   for (let i = input.length - 1; i >= 0; i--) {
  //     console.log(input[i])
  //     // console.log('romanMap[i]')
  //     // console.log(romanMap[i])
  //     const curr = romanMap[input[i]];
  //     console.log('curr: ' + curr)
  //     console.log('prevValue: ' + prevValue)
  //
  //     if(!curr){
  //       throw new Error('number not found')
  //     }
  //
  //
  //     // add or remove from total by comparing prev
  //     if (curr < prevValue) {
  //       total -= curr;
  //     } else {
  //       total += curr;
  //     }
  //      console.log('total: ' + total)
  //
  //     //set prev to cv
  //     prevValue = curr;
  //
  //   }
  //
  //   return total;
  // }






// Function toRoman(number):
// // Step 1: Define a mapping of Roman numerals to corresponding integer values
// romanNumerals = [
//   (1000, 'M'),
//   (900, 'CM'),
//   (500, 'D'),
//   (400, 'CD'),
//   (100, 'C'),
//   (90, 'XC'),
//   (50, 'L'),
//   (40, 'XL'),
//   (10, 'X'),
//   (9, 'IX'),
//   (5, 'V'),
//   (4, 'IV'),
//   (1, 'I')
// ]
//
// // Step 2: Initialize an empty string to store the result
// result = ""
//
// // Step 3: Iterate over each numeral in the romanNumerals list
// For each (value, numeral) in romanNumerals:
// // Step 4: While the current number is greater than or equal to the value
// While number >= value:
// // Step 5: Append the numeral to the result
// result = result + numeral
//
// // Step 6: Subtract the value from the number
// number = number - value
//
// // Step 7: Return the final Roman numeral string
// Return result
//
// Explanation:
//   Mapping: We have a predefined list of tuples, where each tuple contains an integer and its corresponding Roman numeral.
//   Iterating: The function iterates over the list, starting with the largest numeral, and checks if the number can be represented by that numeral.
//   Appending: If the current number is greater than or equal to the numeral's value, we append the numeral to the result string and subtract the numeral's value from the number.
//   Return: Finally, the result string will contain the Roman numeral representation of the input number.



  numberToRoman(input: number):string
  {
    if(input > 3999){
      throw new Error('3999 is the max')
    }
    if(input < 0){
      throw new Error('input must be 0 or higher')
    }
// // Step 1: Define a mapping of Roman numerals to corresponding integer values
      const romanMap: { [key: number]: string } = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
      };
// // Step 2: Initialize an empty string to store the result
    let result = '';
// // Step 3: Iterate over each numeral in the romanNumerals list

    for (const value of Object.keys(romanMap).reverse().map(Number)){
      console.log('value')
      console.log(value)
      // // Step 4: While the current number is greater than or equal to the value
      debugger;
      while(input >= value){
        // Step 5: Append the numeral to the result
        result += romanMap[value];

        // Step 6: Subtract the value from the number
        input -= value

      }
      // const matchingRomanNumeral = romanMap[input];
      // if(value >= input){
      //   console.log('input: ' + input)
      //   console.log('value: ' + value)
      //   if (!!matchingRomanNumeral){
      //     result += matchingRomanNumeral;
      //   }
      //   input -= input;
      //   console.log('input: ' + input)
      //   console.log('value: ' + value)
      // }
    }


// // Step 7: Return the final Roman numeral string
    return result;
  }


  // Explanation:
  // Mapping: A dictionary numeralValues stores Roman numerals as keys and their corresponding integer values as values.
  // Iterating: The function iterates through the Roman numeral string from left to right using an index.
  // Two-character numeral check: It first checks if two characters from the current position form a valid numeral (like IV, IX, CM, etc.).
  // Single-character numeral: If the two-character numeral is not valid, it processes a single character at a time.
  // Adding the values: The value of each numeral (either two-character or single-character) is added to the result.
  // Return: Finally, the result contains the numeric value of the Roman numeral string.
  romanToNumber(input: string):number
  {
    // Step 1: Define a mapping of Roman numerals to corresponding integer values
      const romanMap: { [key: string]: number } = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,
      };
      // Step 2: Initialize a variable to store the result
      let result = 0;

      // Step 3: Initialize a variable to keep track of the current index in the string
      let i = 0;

      // Step 4: Loop through the roman numeral string
      while (i < input.length){
      // Step 5: Check if the current character and the next character form a valid two-character numeral
        const numberFromTwoDigitNumeral = romanMap[input[i] + input[i+1]];
        if (!!numberFromTwoDigitNumeral) {
          // Step 6: Add the value of the two-character numeral to the result
          result+= numberFromTwoDigitNumeral;
          // Step 7: Move the index forward by 2 (since we processed two characters)
          i += 2;
        } else{
          // Step 8: Add the value of the single-character numeral to the result
          const numberFromOneDigitNumeral = romanMap[input[i]];
          if (!!numberFromOneDigitNumeral) {
            result+= numberFromOneDigitNumeral;
            // Step 9: Move the index forward by 1
            i += 1;
          }
        }
      }

    // Step 10: Return the final result
    return result;
  }
}


// Function toRoman(number):
// // Step 1: Define a mapping of Roman numerals to corresponding integer values
// romanNumerals = [
//   (1000, 'M'),
//   (900, 'CM'),
//   (500, 'D'),
//   (400, 'CD'),
//   (100, 'C'),
//   (90, 'XC'),
//   (50, 'L'),
//   (40, 'XL'),
//   (10, 'X'),
//   (9, 'IX'),
//   (5, 'V'),
//   (4, 'IV'),
//   (1, 'I')
// ]
//
// // Step 2: Initialize an empty string to store the result
// result = ""
//
// // Step 3: Iterate over each numeral in the romanNumerals list
// For each (value, numeral) in romanNumerals:
// // Step 4: While the current number is greater than or equal to the value
// While number >= value:
// // Step 5: Append the numeral to the result
// result = result + numeral
//
// // Step 6: Subtract the value from the number
// number = number - value
//
// // Step 7: Return the final Roman numeral string
// Return result
//
// Explanation:
//   Mapping: We have a predefined list of tuples, where each tuple contains an integer and its corresponding Roman numeral.
//   Iterating: The function iterates over the list, starting with the largest numeral, and checks if the number can be represented by that numeral.
//   Appending: If the current number is greater than or equal to the numeral's value, we append the numeral to the result string and subtract the numeral's value from the number.
//   Return: Finally, the result string will contain the Roman numeral representation of the input number.
//
//
// --

