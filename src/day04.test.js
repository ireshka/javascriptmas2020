const { centuryFromYear } = require('./day04');

describe.skip('centuryFromYear()', () => {
  it('returns current century', () => {
    expect.assertions(1);
    const year = 1905;
    const result = centuryFromYear(year);
    const expectedResult = 20;
    console.log(`Result 1: ${result}`);
    expect(result).toBe(expectedResult);
  });

  it('returns current century for edge case of start of century', () => {
    expect.assertions(1);
    const year = 1700;
    const result = centuryFromYear(year);
    const expectedResult = 17;
    console.log(`Result 2: ${result}`);
    expect(result).toBe(expectedResult);
  });
});
