const { alphabetSubsequence } = require('./day19');

describe('alphabetSubsequence()', () => {
  it('returns false when it has duplicate letters', () => {
    expect.assertions(1);
    const string = 'effg';
    const result = alphabetSubsequence(string);
    expect(result).toBe(false);
  });

  it('returns false when NOT in ascending a - z order', () => {
    expect.assertions(1);
    const string = 'cdce';
    const result = alphabetSubsequence(string);
    expect(result).toBe(false);
  });

  it('returns true whenno duplicates and is ascending a - z order', () => {
    expect.assertions(1);
    const string = 'ace';
    const result = alphabetSubsequence(string);
    expect(result).toBe(true);
  });
});
