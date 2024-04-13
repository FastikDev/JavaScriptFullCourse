'use strict';

/**
 * @param {function} func
 * @return {function}
 */
export function saveFuncCalls(func) {
  // put your code here
  return function withMemory(...args) {
    if (!withMemory.callsHistory) {
      withMemory.callsHistory = [];
    }
    withMemory.callsHistory.push(args);
    return func.apply(this, args);
  };
}

// example 1
function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

const sumWithMemory = saveFuncCalls(sum);
sumWithMemory(4, 2); // ===> 6
sumWithMemory(9, 1); // ===> 10

sumWithMemory.callsHistory; // ===> [ [4, 2], [9, 1] ]

// example 2
function addDelta(array, delta) {
  return array.map(el => el + delta);
}

const addDeltaWithMemory = saveFuncCalls(addDelta);
addDeltaWithMemory([111, 22, 55, 4], 8); // ===> [119, 30, 63, 12]
addDeltaWithMemory([9, 1, -8, 15, 7, 0], 7); // ===> [16, 8, -1, 22, 14, 7]

addDeltaWithMemory.callsHistory; // ===> [ [[111, 22, 55, 4], 8], [[9, 1, -8, 15, 7, 0], 7] ]

// example 3
const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const sayHiWithMemory = saveFuncCalls(user.sayHi);
// sayHiWithMemory(); // ===> throw error // because sayHiWithMemory lost context
const sayHiWithMemoryBinded = sayHiWithMemory.bind({ name: 'Tom' });
console.log(sayHiWithMemoryBinded()); // ===> Tom // because we fixed context with bind and run functon again

console.log(sayHiWithMemory.callsHistory); // [ [] ]
