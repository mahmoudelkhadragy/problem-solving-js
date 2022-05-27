var _ = {};

_.filter = function (list, cb) {
  const newArr = [];
  for (let i = 0; i < list.length; i++) {
    if (cb(list[i], i, list) === true) {
      newArr.push(list[i]);
    }
  }
  return newArr;
};

var b = [1, 2, 3, 4, 6, 8, 9];
var c = _.filter(b, function (num) {
  return num % 2 === 0;
});
console.log(c);
