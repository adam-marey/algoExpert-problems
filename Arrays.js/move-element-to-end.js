/*

You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and
returns the array.
The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

Sample Input:
array = [2, 1, 2, 2, 2, 3, 4, 2];
toMove = 2

output: 
[1, 3, 4, 2, 2, 2, 2, 2] // sort is not required

*/
function moveElementToEnd(array, toMove) {
  // two pointers
  let left = 0;
  let right = array.length - 1;
  // swap methods
  while (left < right) {
    if (array[left] === toMove) {
      [array[left], array[right]] = [array[right], array[left]];
      right--;
    } else {
      left++;
    }
  }
  return array;
}
