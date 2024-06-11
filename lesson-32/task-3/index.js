/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

export const makePromise = (number) => {
  // put you code here
  return Promise.resolve(number);
};

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});
