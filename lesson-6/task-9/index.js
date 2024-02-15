function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const reverseArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  return reverseArr;
}

console.log(reverseArray([1, 3, 5]));
console.log(reverseArray(2));
