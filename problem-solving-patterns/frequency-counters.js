/* -> Frequncy Counters <-
    this pattern uses objects or sets to collect values/frequencies of values
    -> avoid the need for nested loops or O(n^2) operatoins with array / strings
*/

// => solution with (Naive)
/* 
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
 }
 */

// => solution with (Frequency counter)
function same(arr1, arr2) {
  let obj1 = {};
  let obj2 = {};

  // check if two arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let val of arr1) {
    // if the value in the array not set in the obj1 set it with 1 and if it is there add 1 to its value
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  for (let key in obj1) {
    // check if the key square exist in the obj2
    // check if the the key val of obj1 is equal to obj2 value
    if (!(key ** 2 in obj2) || obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 9, 4, 1]));
