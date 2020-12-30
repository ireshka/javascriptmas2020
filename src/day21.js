/**
 * Day 21 - Sum of 2
 * You have two integer arrays, a and b, and an integer target value v. Determine
 * whether there is a pair of numbers, where one number is taken from a and the other
 * from b, that can be added togther to get a sum of v. Return true if such a pair
 * exists, otherwise return false.
 * Example:
 * for a = [1, 2, 3], b = [10, 20, 30, 40] anv v = 42, the output should be true
 * ---
 */

const sumOfTwo = (nums1, nums2, value) => {
  const difference = nums1.map((number) => value - number);
  const ifArrayContainsSecondSumElement =
    new Set([...difference, ...nums2]).size !==
    difference.length + nums2.length;
  return ifArrayContainsSecondSumElement;
};

module.exports = { sumOfTwo };
