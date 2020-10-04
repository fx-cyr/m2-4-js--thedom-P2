// Exercise 5
//
// Part 1 - Write
// ---------------
// Write a function accepts an indeterminate amount of numbers as arguments and returns the sum of the squares of all the numbers.
//
// - If any element is not a number, skip it.
// - If no arguments are passed, return `undefined`

const addNumbers = (...nums) => {
  console.log(nums)

  return nums.reduce((acc, cv,index) => {
    if (typeof cv === "number") {
      cv = cv * cv
 console.log(acc," "+index)
      return acc + cv;
    } 
    console.log(acc," "+index)
    return acc
  });
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = addNumbers;
