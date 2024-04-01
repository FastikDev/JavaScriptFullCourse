import { calc } from './calculator.js';

it('sum of numbers', () => {
  const sum = calc('2 + 2');
  expect(sum).toEqual('2 + 2 = 4');
});

it('dif of numbers', () => {
  const dif = calc('2 - 1');
  expect(dif).toEqual('2 - 1 = 1');
});

it('multiplication of numbers', () => {
  const multiplication = calc('3 * 3');
  expect(multiplication).toEqual('3 * 3 = 9');
});

it('division of numbers', () => {
  const division = calc('15 / 3');
  expect(division).toEqual('15 / 3 = 5');
});

it('if its not a string', () => {
  const result = calc(2525);
  expect(result).toEqual(null);
});
