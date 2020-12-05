/**
 * Day 05 - Reverse a String
 * ---
 * Reverse the provided string. You may need to turn the string into an array before you
 * reverse it.
 * Your result must be a string.
 * Example:
 * - reverseAString('hello') returns 'olleh'
 * - reverseAString('Howdy') return 'ydwoH'
 * ---
 */

const reverseAString = (string) => string.split('').reverse().join('');

module.exports = { reverseAString };
