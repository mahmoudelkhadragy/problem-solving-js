// Given an array of unknown length, but with an even amount of elements (numbers),
// copy the half with the highest sum of numbers to the other half of the array.
//If the sum of the first half equals the sum of the second half, return the original array.

function balanced(arr) {
  let arr1 = arr.slice(0, arr.length / 2);
  let arr2 = arr.slice(arr.length / 2);
  let sum1 = 0;
  let sum2 = 0;

  arr1.forEach((num) => {
    sum1 += num;
  });

  arr2.forEach((num) => {
    sum2 += num;
  });

  if (sum1 > sum2) {
    return console.log([...arr1, ...arr1]);
  } else if (sum2 > sum1) {
    return console.log([...arr2, ...arr2]);
  } else {
    return console.log(arr);
  }
}
balanced([88, 3, 27, 5, 9, 0, 13, 10]);
//➞ [6, 3, 1, 6, 3, 1]

// function balanced(arr) {
//   const [a1, a2] = [arr.slice(0, arr.length / 2), arr.slice(arr.length / 2)];
//   const [s1, s2] = [a1, a2].map((x) => x.reduce((a, c) => a + c));
//   if (s1 > s2) return [...a1, ...a1];
//   if (s1 < s2) return [...a2, ...a2];
//   return arr;
// }
