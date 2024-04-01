export const getMinSquaredNumber = arr => Math.min(...arr.map(num => Math.pow(Math.abs(num), 2)));
