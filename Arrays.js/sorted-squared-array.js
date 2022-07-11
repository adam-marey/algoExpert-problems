/*
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same
length with the squares of the original integers also sorted in ascending order,

input:
array = [1, 2, 3, 5, 6, 8, 9]

output:
[1, 2, 9, 25, 36, 64, 81]

*/

function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    sortedSquares[i] = value * value;
  }
  sortedSquares.sort((a, b) => a - b);
  return sortedSquares;
}
