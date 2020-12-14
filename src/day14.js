/**
 * Day 14 - Maximal Adjacent Difference
 * ---
 * Given array of integers, find the maximal absolute difference
 * between any two of its adjacent element.
 * Hints:
 * - Math.abs()
 */

const reduceCallback = (accumulator, current, index, array) => {
  const adjacentDifference = Math.abs(array[index] - array[index - 1]);
  if (adjacentDifference > accumulator) return adjacentDifference;
  return accumulator;
};

const arrayMaximalAdjacentDifference = (numbers) => {
  const max = numbers.reduce(reduceCallback);
  return max;
};

console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));

module.exports = { arrayMaximalAdjacentDifference };
