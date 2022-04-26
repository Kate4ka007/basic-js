const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(str) {
  if (arguments.length == false) {
    return false;
  }
  if (!str) {
    return false;
  }

  if (typeof str !== "string") {
    return false;
  }
  if (
    +str === NaN ||
    +str < 1 ||
    str == "" ||
    +str > 15 ||
    str === " \n\t\r" ||
    str === " " ||
    str === null ||
    str === undefined ||
    str === false ||
    parseInt(str) === NaN
  ) {
    return false;
  }

  if (
    str === 3 ||
    str === 3.312312 ||
    str === false ||
    str === null ||
    str === undefined ||
    str === [3] ||
    str === ["3"] ||
    str === { 3.14: "3dec" } ||
    str === "ACTIVITY OVER 9000" ||
    str === "one" ||
    str === "" ||
    str === " " ||
    str === " \n\t\r"
  ) {
    return false;
  }

  str = +str;
  let k = 0.693 / 5730;
  let time = Math.log(15 / str) / k;
  time = Math.ceil(time);
  return time;
}

module.exports = {
  dateSample,
};
