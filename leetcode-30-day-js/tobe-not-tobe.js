// https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  const throwError = (errorMsg) => {
    throw new Error(errorMsg);
  };
  return {
    toBe: (val2) => val2 === val || throwError("Not Equal"),
    notToBe: (val2) => val2 !== val || throwError("Equal"),
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
