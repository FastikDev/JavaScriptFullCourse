import { reverseArray } from './index.js';

it('if its not array', () => {
  const notArr = reverseArray('Hello');
  expect(notArr).toEqual(null);
});

it('shoud be reverse array', () => {
  const reverse = reverseArray([1, 2, 3, 4, 5]);
  expect(reverse).toEqual([5, 4, 3, 2, 1]);
});

if (
  ('if array is empty',
  () => {
    const empty = reverseArray([]);
    expect(empty).toEqual([]);
  })
);
