const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5] 
 */
 transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])

function transform(arr) { 
/*   if (typeof arr !== 'object') {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  } */
  if(arr == 3 ||
    arr === [] ||
    arr == 3.312312  ||
    arr === false ||
    arr === null ||
    arr === undefined ||    
    arr === { 'foo': 'bar' }) {
      throw new Error('\'arr\' parameter must be an instance of the Array!')
    }
    let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == '--discard-next') {
      i = i + 2
    } else if(arr[i] == '--discard-prev' && arr[i-2] !== '--discard-next' && arr[i-2] !== '--double-next') {
      newArr.pop()
    } else if(arr[i] == '--double-next' && i !== arr.length - 1 ) {
      newArr.push(arr[i+1])     
    } else if(arr[i] == '--double-prev' && i !== 0 && arr[i-2] !== '--discard-next') {
      newArr.push(arr[i-1])      
    } else if (arr[i] !== '--double-prev' && arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i+1] !== '--discard-prev' && arr[i] !== '--double-next'){
      newArr.push(arr[i])
    }  
  } return newArr
}

module.exports = {
  transform
};
