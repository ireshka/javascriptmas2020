/**
 * Day 07 - count Vowel Consonant
 * ---
 * You are given a string s that consists of only English letters. If vowels
 * ('a', 'e', 'i', 'o', 'u') are given a value of 1 and consonants given of 2,
 * return the sum of all of the letters in the input string.
 * Example:
 * For s = "abcde" the output: 8
 * ---
 * Hint:
 * - split()
 * - reduce()
 */

const countVowelConsonant = (string) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  const reduceCallback = (accumulator, current) => {
    if (vowels.has(current)) {
      return (accumulator += 1);
    } else return (accumulator += 2);
  };
  // eslint-disable-next-line unicorn/no-fn-reference-in-iterator
  const numberValue = string.split('').reduce(reduceCallback, 0);

  return numberValue;
};

module.exports = { countVowelConsonant };
