function uniqueCount(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const result = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  count = result.length;
  return count;
}

console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]));
