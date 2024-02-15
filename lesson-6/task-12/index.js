function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  const sortedArray = sortAsc(array);
  const sort = [];
  for (let i = sortedArray.length; i >= 0; i -= 1) {
    if (sortedArray[i] !== sortedArray[i + 1]) sort.push(sortedArray[i]);
  }
  return sort;
}

console.log(sortDesc([5, 5, 4, 4, 3, 4, 1]));
