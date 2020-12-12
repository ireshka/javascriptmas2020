/**
 * Day 10 - adjacent elements product
 * ---
 * Given an array of integers, find the pair of adjacent elements that has the
 * largest product and return that product.
 * Example:
 * Input array: [3, 6, -2, -5, 7, 3] should return 21 because
 * 7 and 3 are the largest products
 * ---
 */

const reduceCallback = (accumulator, current, index, array) => {
  const adjacentSum = current * array[index - 1];
  return adjacentSum > accumulator ? adjacentSum : accumulator;
};

const adjacentElementsProduct = (numbers) => {
  const product = numbers.reduce(reduceCallback);
  console.log(product);
  return product;
};

module.exports = { adjacentElementsProduct };
