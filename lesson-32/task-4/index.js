const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

/*
 * Create a promise and assign it to the variable resultPromise
 * so that the console outputs the sum of all the numbers from the three promises
 */

export const resultPromise = (...promises) => {
  return Promise.all(promises);
};

resultPromise(promiseNumber1, promiseNumber2, promiseNumber3)
  .then(numbersList => {
    console.log(numbersList); // [67, 23, 8]
    const sum = numbersList.reduce((acc, num) => acc + num, 0);
    return sum;
  })
  .then(result => {
    console.log(result); // 98
  });
