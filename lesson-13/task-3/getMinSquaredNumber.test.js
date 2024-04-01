import { getMinSquaredNumber } from './getMinSquaredNumber';

it('if arr empty', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(Infinity);
});

it("if arr it's string", () => {
  const result = getMinSquaredNumber(['one']);
  expect(result).toEqual(NaN);
});

it('shoud be min of squared numbers in array', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});
