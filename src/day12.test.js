const { validTime } = require('./day12');

describe.skip('validTime()', () => {
  it('returns true for valid time', () => {
    expect.assertions(1);
    const string = '13:58';
    const result = validTime(string);
    const expectedResult = true;
    console.log(`Result: ${result}`);
    expect(result).toBe(expectedResult);
  });

  it('returns false when invalid hours', () => {
    expect.assertions(1);
    const string = '25:51';
    const result = validTime(string);
    const expectedResult = false;
    console.log(`Result: ${result}`);
    expect(result).toBe(expectedResult);
  });

  it('returns false when invalid minutes', () => {
    expect.assertions(1);
    const string = '02:76';
    const result = validTime(string);
    const expectedResult = false;
    console.log(`Result: ${result}`);
    expect(result).toBe(expectedResult);
  });
});
