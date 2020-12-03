/**
 * Day 03 - Chunky Monkey
 * ---
 * Write a function that splits an array (first argument) into groups the length of size
 * (second argument) and returns them as a two-dimensional array.
 * ---
 * Example:
 * - chunkyMonkey(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]
 * - chunkyMonkey([0,1,2,3,4,5], 4) should return [[0, 1, 2, 3], [4, 5]]
 * ---
 */

const chunkyMonkey = (values, size) => {
  const arrayLength = values.length;
  const chunksNumber = Math.ceil(arrayLength / size);
  const chunkyArray = [];
  for (let index = 0; index < chunksNumber; index++) {
    const startPosition = index * size;
    const endPosition = startPosition + size;
    const chunk = values.slice(startPosition, endPosition);
    chunkyArray.push(chunk);
  }
  return chunkyArray;
};

module.exports = { chunkyMonkey };
