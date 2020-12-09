/**
 * Day 09 - sum odd fibonacci numbers
 * ---
 * Given a positive integer num, return the sum of all odd Fibonacci numbers
 * that are less than or equal to num.
 * The first two numbers in the Fibonacci sequence are 1 and 1. Every additional
 * number in the sequence is the sum of the two previous numbers.
 * The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 * Example:
 * sumFibs(10) should return 8 because all odd Fibonacci numbers less than or
 * equal to 10 are 1, 1, 3, and 5.
 * ---
 */

const sumOddFibonacciNumbers = (number) => {
  const fibArray = [1, 1];
  let sum = 2;

  for (let index = 1; fibArray[index] <= number; index++) {
    const nextFibNumber = fibArray[index] + fibArray[index - 1];
    fibArray.push(nextFibNumber);
    const lastFibNumber = fibArray[index + 1];
    if (lastFibNumber <= number && lastFibNumber % 2) {
      sum += lastFibNumber;
    }
  }
  return sum;
};

sumOddFibonacciNumbers(10);

module.exports = { sumOddFibonacciNumbers };
