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
 if(arguments.length == false) {
  return false;
}
console.log(arguments)
  if (typeof str !== "string") { 
    return false;
  }
  if (+(str) == NaN || +(str) <= 0 || str == "" || +str >= 15 || str === ' \n\t\r' || str === ' ') {
    return false;
  }
  let k = 0.693 / 5730;
  let time = Math.log(15 / str) / k;
  time = Math.ceil(time);

  return time;
}

module.exports = {
  dateSample,
};
