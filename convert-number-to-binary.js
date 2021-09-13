// Given N = 32 the function should return 0, because N has binary representation '100000'
// given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let n = N;
  let binary = n.toString(2);

  let max = 0;
  let count = 0;
  for (let i of binary.split("")) {
    if (+i === 0) {
      count += 1;
    } else {
      if (count >= max) {
        max = count;
      }
      count = 0;
    }
  }

  if (max === 0) {
    return 0;
  } else {
    return max;
  }
}

solution(2);

//[1..2,147,483,647]
