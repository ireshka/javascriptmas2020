const { depositProfit } = require('./day02');

describe('depositProfit()', () => {
  it.skip('returns number of years it will take to hit threshold based off of deposit & rate', () => {
    expect.assertions(1);
    const deposit = 100;
    const rate = 20;
    const threshold = 170;
    const result = depositProfit(deposit, rate, threshold);
    expect(result).toBe(3);
  });
});
