const { arrayMaximalAdjacentDifference } = require('./day14');

describe.skip('arrayMaximalAdjacentDifference()', () => {
  it('returns largest difference between adjacent values', () => {
    expect.assertions(1);
    const nums = [2, 4, 1, 0];
    const result = arrayMaximalAdjacentDifference(nums);
    const expectedResult = 3;
    expect(result).toBe(expectedResult);
  });

  it('returns largest difference between adjacent values example 2', () => {
    expect.assertions(1);
    const nums = [2, 9, 1, 0];
    const result = arrayMaximalAdjacentDifference(nums);
    const expectedResult = 8;
    expect(result).toBe(expectedResult);
  });
});
