const { sortByLength } = require('./day06');

describe.skip('sortByLength()', () => {
  it('sorts the strings from shortest to longest', () => {
    expect.assertions(1);
    const strs = ['abc', '', 'aaa', 'a', 'zz'];
    const result = sortByLength(strs);
    const expectedResult = ['', 'a', 'zz', 'abc', 'aaa'];
    console.log(`Result:\n${result}`);
    expect(result).toStrictEqual(expectedResult);
  });
});
