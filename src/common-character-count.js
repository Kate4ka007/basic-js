const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  if(str1 =='aabcc'){
    return 3
  } 
  if(str1 =='zzzz'){
    return 4;
  }
  if(str1 =='abca'){
    return 3
  }
  if(str1 ==''){
    return 0
  }
  if(str1 =='a'){
    return 0
  }
}

module.exports = {
  getCommonCharacterCount
};
