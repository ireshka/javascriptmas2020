const { adjacentElementsProduct } = require('./day10');

describe.skip('adjacentElementsProduct()', () => {
  it('returns largest product of adjacent values', () => {
    expect.assertions(1);
    const nums = [3, 6, -2, -5, 7, 3];
    const result = adjacentElementsProduct(nums);
    const expectedResult = 21;
    console.log(`Result: ${result}`);
    expect(result).toBe(expectedResult);
  });
});
