/**
 * Day 01 - Candies
 * ---
 * n children have got m pieces of candy. They want to eat as much as they can, but
 * each child must east exactly the same amount of candy as any other child. Determine
 * how many pieces of cany will be eaten by all the children together. Individual pieces
 * of candy cannot be split.
 * ---
 * Example:
 * For n = 3 and m = 10, the output should be candies(n, m) = 9
 * Each child will eatch 3 pieces. So the answer is 9.
 * ---
 * Hint:
 * Math.floor()
 */

const candies = (children, candy) => {
  return Math.floor(candy / children) * children;
};

module.exports = { candies };
