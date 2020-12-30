const { sumOfTwo } = require('./day21');

describe('sumOfTwo()', () => {
  it('returns true if a value can be found that by adding one number from each list', () => {
    expect.assertions(1);
    const nums1 = [1, 2, 3];
    const nums2 = [10, 20, 30, 40];
    const value = 42;
    const result = sumOfTwo(nums1, nums2, value);

    expect(result).toBeTruthy();
  });
});
