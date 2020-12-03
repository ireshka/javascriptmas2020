/**
 * Day 02 - Deposit Profit
 * ---
 * You have deposited a specific amount of dollars into yout bank account. Each year
 * your balance increases at the same growth rate. Find out how long it would take your
 * balance to pass a specific threshold with the assumption that you don't make any
 * additional depositos
 * ---
 * Example:
 * For deposit = 100, rate = 20 and threshold = 170, the output should be
 * depositProfit(deposit, rate, threshold) = 3.
 * Each year the amount of money on your account increases by 20%. It means that
 * throughout the years your balance would be:
 * - year 0: 100;
 * - year 1: 120
 * - year 2: 144
 * - year 3: 172,8
 * Thus, it will take 3 years for your balance to pass the threshold, which is the answer
 * ---
 */

const getCapitalizedAmount = (amount, rate) => amount * (1 + rate / 100);

const depositProfit = (deposit, rate, threshold) => {
  let actualThreshold = deposit;
  let year = 0;

  while (actualThreshold < threshold) {
    actualThreshold = getCapitalizedAmount(actualThreshold, rate);
    year += 1;
  }

  return year;
};

module.exports = { depositProfit };
