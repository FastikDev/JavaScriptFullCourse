'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
function getSum(arr) {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}

// examples
console.log(getSum([1, 10, -10, 4])); // ==> 5
console.log(getSum([1])); // ==> 1
console.log(getSum([-8, 8])); // ==> 0
console.log(getSum(10, 12, 14)); // ==> null
