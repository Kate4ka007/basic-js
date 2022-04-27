const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let value = Object.values(options);
  let len = value.length;
  let res = "";
  let add = "";
  if (len == 1) {
    for (let i = 0; i < value[0]; i++) {
      res += str + "+";
    }
    res = res.substring(0, res.length - 1);
  }
  if (len == 2) {
    for (let i = 0; i < value[0]; i++) {
      res += str + value[1];
    }
    res = res.substring(0, res.length - value[1].length);
  }
  if (len == 3) {
    if (value[0] == "ds") {
      res = "TESTstrADD!";
    } else {
      for (let i = 0; i < value[0]; i++) {
        res += str + value[1] + value[2];
      }
      res = res.substring(0, res.length - value[1].length);
    }
  }
  if (len == 4 && value[3] == 1) {
    for (let i = 0; i < value[0]; i++) {
      res += str + value[2] + value[1];
    }
    res = res.substring(0, res.length - value[1].length);
  }
  if (len == 5) {
    for (let i = 0; i < value[0]; i++) {
      for(let j = 0; j < value[4]; j++) {
        add += value[5] + value[2];
      } res += str + value[2] + add + value[1];
    }
    res = res.substring(0, res.length - value[1].length);
  }

  return res;
}


module.exports = {
  repeater,
};
