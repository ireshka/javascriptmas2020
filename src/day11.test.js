const { avoidObstacles } = require('./day11');

describe.skip('avoidObstacles()', () => {
  it('returns minimal number of jumps in between numbers', () => {
    expect.assertions(1);
    const nums = [5, 3, 6, 7, 9];
    const result = avoidObstacles(nums);
    const expectedResult = 4;
    console.log(`Result: ${result}`);
    expect(result).toBe(expectedResult);
  });
});
