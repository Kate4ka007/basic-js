const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digitArr = [];
  let count = 0;  
  while (n) {
    digitArr.push(n % 10);
    n = Math.floor(n / 10);
  }
  for (let j = 0; j < digitArr.length; j++) {
    let num = 0;
    for (let i = digitArr.length - 1; i >= 0; i--) {
      if (i !== j) {
        num = num * 10 + digitArr[i];
      }
    }
    count = Math.max(num, count);
  }
  return count;
}

module.exports = {
  deleteDigit,
};
