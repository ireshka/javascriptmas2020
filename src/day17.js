/**
 * Day 16 - Different symbols naive
 * Given a string, find the number of different character in int
 * Example: For s = 'cabca' - output should be 3
 * There are 3 different characters: a, b, c
 * ---
 */

const differentSymbolsNaive = (string) => {
  const uniqueSymbols = new Set(string.split(''));
  const numberSymbols = uniqueSymbols.size;
  return numberSymbols;
};

differentSymbolsNaive('cabca');

module.exports = { differentSymbolsNaive };
