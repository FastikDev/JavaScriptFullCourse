function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  if (min + max > 1000) {
    return true;
  }
  return false;
}

console.log(checker([5, 3, 8, 2, 9, 1]));
console.log(checker([500, 300, 800, 200, 900, 250]));
console.log(checker(0));
console.log(checker([1]));
console.log(checker([]));
