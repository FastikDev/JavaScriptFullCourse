'use strict';

/**
 * @param {function} func
 * @param {number} ms
 * @return {function}
 */

export function defer(func, ms) {
  // put your code here
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi I'm ${this.name}`);
  },
};

const defferred = defer(user.sayHi, 1000);

defferred.call(user);
