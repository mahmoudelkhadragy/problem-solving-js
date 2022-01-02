var _ = {};
_.map = function (list, callBack) {
  let arr = [];
  for (let i = 0; i < list.length; i++) {
    arr.push(callBack(list[i], i, list));
  }
  return arr;
};

var brothers = ["fares", "nader", "rody"];

var borthersCapitalize = _.map(brothers, function (m, i, list) {
  return m.charAt(0).toUpperCase() + m.slice(1);
});
console.log(borthersCapitalize);
