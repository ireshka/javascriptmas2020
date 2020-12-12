/**
 * Day 11 - avoid obstacles
 * ---
 * You are given an array of integers representing coordinates of obstacles
 * situated on a straight line.
 * Assume that you are jumping from the point with coordinate 0 to the right.
 * You are allowed only to make jumps of the same length represented
 * by some integer.
 * Find the minimal length of the jump enough to avoid all the obstacles.
 * Example:
 * input Array = [5, 3, 6, 7, 9] the output should be 4
 * ---
 * Hints:
 * - sort(), every()
 */

const avoidObstacles = (numbers) => {
  const sortedObstacles = [...numbers].sort((a, b) => a - b);
  const largestNumber = sortedObstacles[sortedObstacles.length - 1];
  console.log(largestNumber);
  for (let jump = 1; jump <= largestNumber + 1; jump++) {
    if (sortedObstacles.every((obstacle) => obstacle % jump !== 0)) {
      return jump;
    }
  }
};

module.exports = { avoidObstacles };
