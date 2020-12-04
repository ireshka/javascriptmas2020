const { chunkyMonkey } = require('./day03');

describe.skip('chunkyMonkey()', () => {
  it('returns largest positive integer possible for digit count', () => {
    expect.assertions(1);
    const values = ['a', 'b', 'c', 'd'];
    const size = 2;
    const result = chunkyMonkey(values, size);
    const expectedResult = [
      ['a', 'b'],
      ['c', 'd'],
    ];
    expect(result).toStrictEqual(expectedResult);
  });

  // My extra test:
  it('returns correct number of chunks even if one of chunk is smaller than others', () => {
    expect.assertions(1);
    const values = ['a', 'b', 'c', 'd', 'e'];
    const size = 2;
    const result = chunkyMonkey(values, size);
    const expectedResult = [['a', 'b'], ['c', 'd'], ['e']];
    expect(result).toStrictEqual(expectedResult);
  });

  it.each([
    [['a', 'b', 'c', 'd', 'e'], 4, [['a', 'b', 'c', 'd'], ['e']]],
    [
      ['a', 'b', 'c', 'd', 'e', 'f'],
      3,
      [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
      ],
    ],
  ])('array %p should have %i-sized chunks', (array, size, result) => {
    expect(chunkyMonkey(array, size)).toStrictEqual(result);
  });
});
