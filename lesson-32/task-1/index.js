const getSum = numbers => numbers
  .filter(value => !isNaN(value))
  .reduce((acc, number) => acc + Number(number), 0);

export const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then(num => getSum(num))
    .catch(() => Promise.reject(new Error('Can\'t calculate')));
};