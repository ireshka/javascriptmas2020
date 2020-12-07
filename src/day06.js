/**
 * Day 06 - Sort by length
 * ---
 * Given an array of strings, sort them in the order of increasing lengths.
 * If two strings have the same length, their relative order must be the same
 * as in the initial array.
 * Example:
 * For: inputArray = ["abc", "", "aaa", "a", "zz"]
 * Output: ["", "a", "zz", "abc", "aaa"]
 * ---
 */

const sortByLengthCallback = (a, b) => {
  if (a.length < b.length) return -1;
  if (a.length > b.length) return 1;
  return 0;
};

const sortByLength = (strings) => {
  return strings.sort(sortByLengthCallback);
};

module.exports = { sortByLength };
