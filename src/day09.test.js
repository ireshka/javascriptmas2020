const { sumOddFibonacciNumbers } = require('./day09');

describe.skip('sumOddFibonacciNumbers()', () => {
  it('returns sum of all odd Fibonnci numbers', () => {
    expect.assertions(1);
    const number = 10;
    const result = sumOddFibonacciNumbers(number);
    const expectedResult = 10;
    console.log(`Result 1: ${result}`);

    expect(result).toBe(expectedResult);
  });

  it('returns sum of all odd Fibonnci numbers 2nd example', () => {
    expect.assertions(1);
    const number = 1000;
    const result = sumOddFibonacciNumbers(number);
    const expectedResult = 1785;
    console.log(`Result 2: ${result}`);

    expect(result).toBe(expectedResult);
  });
});
