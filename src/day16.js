/**
 * Day 16 - Insert Dashes
 * Transform a given sentence into a new one with dashes between each
 * two consecutive letters
 * Example:
 * For input: "aba caba" -> "a-b-a c-a-b-a"
 * ---
 */

const insertDashes = (array) => {
  const words = array.split(' ');
  const wordsWithDashes = words.map((word) => word.split('').join('-'));
  return wordsWithDashes.join(' ');
};

module.exports = { insertDashes };
