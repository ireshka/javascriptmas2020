/**
 * Day 13 - Extract each kit
 * ---
 * Given array of integers, remove each kth element from it.
 * Example:
 * Input array: [1,2,3,4,5,6,7,8,9,10], k = 3
 * Output: [1,2,4,5,7,8,10]
 * Hints:
 * - filter ()
 */

const extractEachKth = (numbers, index) => {
  return numbers.filter((element) => element % index !== 0);
};

module.exports = { extractEachKth };
