const { countVowelConsonant } = require('./day07');

describe.skip('countVowelConsonant()', () => {
  it('returns total of vowels(1) and consonants(2) to be added', () => {
    expect.assertions(1);
    const value = 'abcde';
    const result = countVowelConsonant(value);
    const expectedResult = 8;
    console.log(`Result: ${result}`);
    expect(result).toBe(expectedResult);
  });
});
