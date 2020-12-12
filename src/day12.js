/**
 * Day 12 - Valid Time
 * ---
 * Check if the given stringing is a correct time representation of the 24-hour clock.
 * Example:
 * "13:58" - output true
 * "25:51" - output false
 * "02:76" - output false
 * ---
 * Hints:
 * - parseInt(), split()
 */

const validTime = (string) => {
  const timeDelimiter = ':';
  const [hours, minutes] = string.split(timeDelimiter);
  const hoursNumber = Number.parseInt(hours, 10);
  const minutesNumber = Number.parseInt(minutes, 10);
  const hoursAreValid = hoursNumber >= 0 && hoursNumber <= 23 ? true : false;
  const minutesAreValid =
    minutesNumber >= 0 && minutesNumber <= 59 ? true : false;
  if (hoursAreValid && minutesAreValid) {
    return true;
  }
  return false;
};

module.exports = { validTime };
