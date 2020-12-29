const { domainType } = require('./day20');

describe('domainType()', () => {
  it('returns list of domain types', () => {
    expect.assertions(1);
    const domains = ['en.wiki.org', 'codefights.com', 'happy.net', 'code.info'];
    const result = domainType(domains);

    const expectedResult = [
      'organization',
      'commercial',
      'network',
      'information',
    ];

    expect(result).toStrictEqual(expectedResult);
  });
});
