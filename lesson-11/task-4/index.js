const countOccurrences = (text = '', str) => {
  // put your code here
  if (str.length === 0) {
    return null;
  }
  return text.split(str).length - 1;
};
