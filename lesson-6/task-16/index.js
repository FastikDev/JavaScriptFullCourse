function removeDuplicates(array) {
  const notDuplicates = [];

  if (!Array.isArray(array)) {
    return null;
  }

  for (let i = 0; i < array.length; i++) {
    if (notDuplicates.indexOf(array[i]) === -1) notDuplicates.push(array[i]);
  }
  return notDuplicates;
}

console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 3, 3]));
