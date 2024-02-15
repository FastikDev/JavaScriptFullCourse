'use strict';

// put your code here
function findDivCount(a, b, n) {
  let result = 0;

  for (a; a <= b; a += 1) {
    if (a % n === 0) result += 1;
  }
  return result;
}
console.log(findDivCount(14, 22, 7));
console.log(findDivCount(8, 12, 3));
