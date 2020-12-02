const { candies } = require('./day01');

describe('day 01: candies()', () => {
  it('returns ammount of total equal candy to be eaten', () => {
    expect.assertions(1);
    const children = 3;
    const candy = 10;

    const result = candies(children, candy);

    console.log(`Result: ${result}`);

    expect(result).toBe(9);
  });
});
