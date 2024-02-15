const getSubArray = (arr, numberOfElements) => {
  // put your code here
  const arrayCopy = arr.slice();

  arrayCopy.length = numberOfElements;

  return arrayCopy;
};
