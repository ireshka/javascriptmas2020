/**
 * Day 19 - Alphabet Subsequence
 * Check whether the given stringing is a subseequence of the plaintext alphabet.
 * Example:
 * for stringings: 'effg' or 'cdce' the ouput should be false
 * for stringings: 'ace' or 'bxz' the output should be true
 * ---
 */

const alphabetSubsequence = (string) => {
  const alphabetArray = string.split('');
  const alphabetSet = new Set(string);
  if (alphabetSet.size !== string.length) {
    return false;
  }
  const sortedArray = [...alphabetArray].sort((a, b) => {
    return a.toLowerCase() - b.toLowerCase();
  });
  return alphabetArray.every(
    (element, index) => element === sortedArray[index],
  );
};

module.exports = { alphabetSubsequence };
