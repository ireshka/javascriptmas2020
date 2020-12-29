/**
 * Day 20 - Domain Type
 * GoDaddy makes a lot of different top-level domains available to its customers.
 * A top-level domain is one that goes directly after the last dot in the domain
 * name, for example .com in example.com. To help the users choose from available domains,
 * GoDaddy is introducing a new feature that shows the type of chosen top-level domain.
 * You have to implement this feature. To begin with, you want to write a function that
 * labels the domain as "commercial", "organization", "network" or "information"
 * for: .com, .org, .net, .info respectively. For the given list of domains return the list
 * of their labels.
 * Example:
 * For domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"] the output should
 * be domainType(domains) = ["organization", "commercial", "network", "information"]
 * ---
 */

const domainObject = {
  com: 'commercial',
  info: 'information',
  net: 'network',
  org: 'organization',
};

const domainType = (domains) => {
  const domainsType = domains.map((address) => {
    const domainShortcut = address.split('.').pop();
    return domainObject[domainShortcut];
  });
  return domainsType;
};

module.exports = { domainType };
