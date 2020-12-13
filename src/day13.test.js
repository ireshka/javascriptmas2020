const { extractEachKth } = require('./day13');

describe.skip('extractEachKth()', () => {
  it('returns largest positive integer possible for digit count', () => {
    expect.assertions(1);
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const index = 3;
    const result = extractEachKth(nums, index);
    console.log('Result:', result);
    const expectedResult = [1, 2, 4, 5, 7, 8, 10];
    expect(result).toStrictEqual(expectedResult);
  });
});
