const { differentSymbolsNaive } = require('./day17');

describe('differentSymbolsNaive()', () => {
  it('returns count of unique characters', () => {
    expect.assertions(1);
    const string = 'cabca';
    const result = differentSymbolsNaive(string);
    const expectedResult = 3;
    expect(result).toBe(expectedResult);
  });
});
