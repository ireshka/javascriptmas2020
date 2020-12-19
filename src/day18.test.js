const { arrayPreviousLess } = require('./day18');

describe('arrayPreviousLess()', () => {
  it('shift previous postions from the left to a smaller value or store -1', () => {
    expect.assertions(1);
    const nums = [3, 5, 2, 4, 5];
    const result = arrayPreviousLess(nums);
    const expectedResult = [-1, 3, -1, 2, 4];
    expect(result).toStrictEqual(expectedResult);
  });
});
