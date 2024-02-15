function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const clone = arr.slice();

  return clone;
}

console.log(cloneArr(0));
console.log(cloneArr([1, 2, 3, 4, 5]));
