// solution with closure and use outer variable
var createCounter = function (n) {
  let currentCount = n - 1;
  return function () {
    currentCount += 1;
    return currentCount;
  };
};

// Approach 2: Postfix Increment Syntax
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

// Approach 3: Prefix Decrement and Increment Syntax
var createCounter = function (n) {
  --n;
  return function () {
    return ++n;
  };
};

// Approach 4: Postfix Increment Syntax With Arrow Function
var createCounter = function (n) {
  return () => n++;
};

var createCounter = function (n) {
  return function () {
    let result = n;
    n = n + 1;
    return result;
  };
};
const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
