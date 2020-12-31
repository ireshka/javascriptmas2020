/**
 * Day 22 - Exract Matrix Column
 * Given a rectangular matrix and an integer column, return an array containing the
 * elements of the columnth column of the given matrix (the leftmost column is the 0th one).
 * Example:
 * For matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], column 2, the output should be
 * extractMatrixColumnt(matrix, column) = [1, 0, 3]
 * ---
 */

const extractMatrixColumn = (matrix, column) => {
  const result = matrix.reduce((accumulator, current) => {
    return [...accumulator, current[column]];
  }, []);
  return result;
};

module.exports = { extractMatrixColumn };
