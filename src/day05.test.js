const { reverseAString } = require('./day05');

describe.skip('reverseAString()', () => {
  it('returns original string reversed', () => {
    expect.assertions(1);
    const string = 'hello';
    const result = reverseAString(string);
    const expectedResult = 'olleh';
    console.log(`Result: ${result}`);
    expect(result).toBe(expectedResult);
  });
});
