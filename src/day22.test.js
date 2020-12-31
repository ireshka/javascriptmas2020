const { extractMatrixColumn } = require('./day22');

describe('extractMatrixColumn()', () => {
  it('returns largest positive integer possible for digit count', () => {
    expect.assertions(1);
    const matrix = [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6],
    ];
    const column = 2;
    const result = extractMatrixColumn(matrix, column);
    const expectedResult = [1, 0, 3];
    expect(result).toStrictEqual(expectedResult);
  });
});
