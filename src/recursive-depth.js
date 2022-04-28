const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let sum = 1;
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "object") {
        res += 1 + this.calculateDepth(arr[i]);
        if( res > sum) {
          sum = res;
          
        } 
      } 
      res = 0;
    }
    return sum;
  }
}

module.exports = {
  DepthCalculator,
};
