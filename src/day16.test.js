const { insertDashes } = require('./day16');

describe('insertDashes()', () => {
  it('insert dashes in between chars', () => {
    expect.assertions(1);
    const value = 'aba caba';
    const result = insertDashes(value);
    const expectedResult = 'a-b-a c-a-b-a';
    expect(result).toBe(expectedResult);
  });
});
