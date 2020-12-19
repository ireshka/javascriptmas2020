/**
 * Day 17 - Array previous less
 * Given an array of integers, for each position i, search among the previous
 * positions for the last from the left position that containt a smaller value.
 * Store that value at position i in the answer. If no such value can be found
 * store -1 instead.
 * Example:
 * Fot items [3, 5, 2, 4, 5] the output should be [-1, 3, -1, 2, 4]
 * ---
 */

const arrayPreviousLess = (nums) => {
  const resultArray = nums.map((element, index, array) => {
    let smallerNumber = null;
    let index_ = index;
    while (index_ >= 0 && !smallerNumber) {
      if (array[index_] < element) {
        smallerNumber = array[index_];
      } else {
        index_--;
      }
    }
    const result = smallerNumber || -1;
    return result;
  });
  return resultArray;
};

module.exports = { arrayPreviousLess };
