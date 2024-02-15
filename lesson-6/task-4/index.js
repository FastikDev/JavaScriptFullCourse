'use strict';

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
  // put your code here
  const [start, ...number] = numbers;

  return [...number, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  // put your code here
  const numbersCopy = numbers.slice();

  const start = numbersCopy[0];

  for (let i = 0; i < numbersCopy.length - 1; i += 1) {
    numbersCopy[i] = numbersCopy[i + 1];
  }
  numbersCopy[numbersCopy.length - 1] = start;
  return numbersCopy;
}
// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]()
